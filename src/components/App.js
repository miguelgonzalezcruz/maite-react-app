import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "../blocks/App.css";

// ----------------- Components -----------------

import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Profile from "./Profile";
import ItemModal from "./ItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import BookModal from "./BookModal";
import AddItemModal from "./AddItemModal";
import About from "./About";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";

// ----------------- Utils -----------------
import { defaultPublicFurniture } from "../utils/defaultPublicFurniture";
import { register, login, authorize } from "../utils/auth";
import {
  getItemsFromList,
  addItemsToList,
  removeItemsFromList,
  bookItem,
  cancelBookItem,
} from "../utils/api";

// ----------------- Context -----------------
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [defaultFurniture, setDefaultFurniture] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddItemPopupActive, setIsAddItemPopupActive] = useState(false);
  const history = useHistory();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPopupActive("cardPopup");
  };

  const handleCardBook = (card) => {
    setSelectedCard(card);
    setIsPopupActive("book");
  };

  const handleClose = () => {
    setIsPopupActive(false);
  };

  const handleCloseEsc = () => {
    setIsPopupActive(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        handleCloseEsc();
      }
    };
    if (isPopupActive) {
      window.addEventListener("keydown", close);
    }
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [isPopupActive]);

  const handleCloseEvent = (event) => {
    if (event.target === event.currentTarget) {
      setIsPopupActive(null);
    }
  };

  // ----------------- Register Modal -----------------
  const handleRegister = (
    email,
    password,
    name,
    surname,
    phone,
    typeofuser
  ) => {
    setIsLoading(true);
    register(email, password, name, surname, phone, typeofuser)
      .then((res) => {
        console.log(res);
        if (res) {
          handleLogin(res.email, password);
          setIsLogged(true);
        }
      })
      .then(handleClose)
      .catch((err) => {
        alert(err.message || "Register failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // ----------------- Login Modal -----------------
  const handleLogin = (email, password) => {
    setIsLoading(true);
    login(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          handleAuthorize();
          setIsLogged(true);
        }
      })
      .then(handleClose)
      .catch((err) => {
        alert(err.message || "Login failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // ----------------- Book Modal -----------------

  const handleBook = (card) => {
    // pending to implement. This function will create a new business opportunity in Hubspot
  };

  // ----------------- Authorize -----------------

  const handleAuthorize = () => {
    authorize(localStorage.getItem("jwt"))
      .then((user) => {
        if (user) {
          setIsLogged(true);
          setCurrentUser(user);
          setIsAdmin(user.typeofuser === "admin");
        } else {
          setIsLogged(false);
          setCurrentUser({});
          setIsAdmin(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleAuthorize();
  }, []);

  // ----------------- Logout -----------------

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLogged(false);
    setCurrentUser({});
    history.push("/login");
  };

  // ----------------- Item Modal -----------------

  // React.useEffect(() => {
  //   setDefaultFurniture(defaultPublicFurniture);
  // }, []);

  // ***************** Item Actions *****************

  // ----------------- Add Item -----------------

  const handleAddItemSubmit = (name, description, price, imageUrl, forsale) => {
    setIsLoading(true);
    addItemsToList(name, description, price, imageUrl, forsale)
      .then((card) => {
        setCardId(card);
        setDefaultFurniture([card, ...defaultFurniture]);
      })
      .then(handleClose)
      .catch((err) => {
        alert(err.message || "Add item failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function setCardId(card) {
    card.id = defaultFurniture.length + 1;
  }

  useEffect(() => {
    getItemsFromList()
      .then((items) => {
        setDefaultFurniture(items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setDefaultFurniture(defaultPublicFurniture);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header
            isLogged={isLogged}
            isAdmin={isAdmin}
            currentUser={currentUser}
            handleRegister={handleRegister}
            handleLogout={handleLogout}
            openRegisterPopup={() => {
              setIsPopupActive("register");
            }}
            openLoginPopup={() => {
              setIsPopupActive("login");
            }}
            openAddItemPopup={() => {
              setIsPopupActive("addItem");
            }}
          />
          <Switch>
            <Route exact path="/">
              <Hero
                handleRegister={handleRegister}
                openRegisterPopup={() => {
                  setIsPopupActive("register");
                }}
                isLogged={isLogged}
                currentUser={currentUser}
              />

              <Main
                cards={defaultFurniture}
                handleCardClick={handleCardClick}
                handleCardBook={handleCardBook}
                isLogged={isLogged}
                currentUser={currentUser}
                isAdmin={isAdmin}
              />

              <About />
            </Route>

            <ProtectedRoute path="/about" isLogged={isLogged}>
              <Profile />
            </ProtectedRoute>
          </Switch>

          <Footer />

          {isPopupActive === "cardPopup" && (
            <ItemModal
              isOpen={isPopupActive}
              name="preview-card"
              card={selectedCard}
              onClose={handleClose}
              closeEsc={handleCloseEsc}
              closePopup={handleCloseEvent}
            />
          )}

          {isPopupActive === "register" && (
            <RegisterModal
              isOpen={isPopupActive === "register"}
              name="register"
              onClose={handleClose}
              closeEsc={handleCloseEsc}
              closePopup={handleCloseEvent}
              onRegister={handleRegister}
              buttonText={isLoading ? "Registering..." : "Register"}
            />
          )}

          {isPopupActive === "login" && (
            <LoginModal
              isOpen={isPopupActive === "login"}
              name="login"
              onClose={handleClose}
              closeEsc={handleCloseEsc}
              closePopup={handleCloseEvent}
              onLogin={handleLogin}
              buttonText={isLoading ? "Login ..." : "Login"}
            />
          )}

          {isPopupActive === "book" && (
            <BookModal
              isOpen={isPopupActive === "book"}
              name="book"
              onClose={handleClose}
              closeEsc={handleCloseEsc}
              closePopup={handleCloseEvent}
              onLogin={handleLogin}
              onBook={handleBook}
              currentUser={currentUser}
              card={selectedCard}
            />
          )}

          {isPopupActive === "addItem" && (
            <AddItemModal
              isOpen={isPopupActive === "addItem"}
              name="addItem"
              onClose={handleClose}
              closeEsc={handleCloseEsc}
              closePopup={handleCloseEvent}
              onAddItem={handleAddItemSubmit}
              buttonText={isLoading ? "Saving..." : "Save"}
            />
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
