import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "../blocks/App.css";

// ----------------- Components -----------------

import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Profile from "./Profile";
import ItemModal from "./ItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import About from "./About";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";

// ----------------- Utils -----------------
import { defaultPublicFurniture } from "../utils/defaultPublicFurniture";
import { register, login, authorize } from "../utils/auth";
import { secretKey } from "../utils/constants";

// ----------------- Context -----------------
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [defaultFurniture, setDefaultFurniture] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isRegisterPopupActive, setIsRegisterPopupActive] = useState(false);
  const [isLoginPopupActive, setIsLoginPopupActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPopupActive("cardPopup");
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
      .catch((err) => console.log(err))
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
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // ----------------- Authorize -----------------

  const handleAuthorize = () => {
    authorize(localStorage.getItem("jwt"))
      .then((user) => {
        if (user) {
          setIsLogged(true);
          setCurrentUser(user);
        } else {
          setIsLogged(false);
          setCurrentUser({});
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleAuthorize();
  }, []);

  // ----------------- Item Modal -----------------

  React.useEffect(() => {
    setDefaultFurniture(defaultPublicFurniture);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header
            handleRegister={handleRegister}
            openRegisterPopup={() => {
              setIsPopupActive("register");
            }}
            openLoginPopup={() => {
              setIsPopupActive("login");
            }}
          />
          <Switch>
            <Route exact path="/">
              <Hero
                handleRegister={handleRegister}
                openRegisterPopup={() => {
                  setIsPopupActive("register");
                }}
              />

              <Main
                cards={defaultFurniture}
                handleCardClick={handleCardClick}
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
              buttonText={isLoading ? "Saving..." : "Save"}
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
            />
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
