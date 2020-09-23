import React from 'react';
import './JarSystemInfoView.scss';

const HomeView = () => {
  return (
    <>
      <header className="App-header">
        <h1>JARS Financial Management System</h1>
      </header>
      <main>
        <div className="card-container">
          <div className="card">
            <img
              className="jar-img"
              src="https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Necessities Jar"
            />
            <div className="jar-info-container">
              <h2 className="jar-info-title">
                Necessities Jar <br /> (NEC - 55%)
              </h2>
              <p className="jar-info-text">
                This account is for managing your everyday expenses and bills. This would include
                things like your rent, mortgage, utilities, bills, taxes, food, clothes, etc.
                Basically it includes anything that you need to live, the necessities.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="jar-img"
              src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Play Money Jar"
            />
            <div className="jar-info-container">
              <h2 className="jar-info-title">
                Play Money Jar <br /> (PLM - 10%)
              </h2>
              <p className="jar-info-text">
                The purpose of this jar is to nurture yourself. You could purchase an expensive
                bottle of wine at dinner, get a massage or go on a weekend getaway. Play can be
                anything your heart desires.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="jar-img"
              src="https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Investment for the Future Jar"
            />
            <div className="jar-info-container">
              <h2 className="jar-info-title">
                Investment for the Future Jar <br /> (IFF - 10%)
              </h2>
              <p className="jar-info-text">
                Financial freedom. The money that you put into this jar is used for investments and
                building your passive income streams. You never spend this money. The only time you
                would spend this money is once you become financially free. Even then you would only
                spend the returns on your investment. Never spend the principal.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="jar-img"
              src="https://images.pexels.com/photos/1750566/pexels-photo-1750566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Educate Yourself Jar"
            />
            <div className="jar-info-container">
              <h2 className="jar-info-title">
                Educate Yourself Jar <br /> (EDU - 10%)
              </h2>
              <p className="jar-info-text">
                You are you're most valuable asset, so why shouldn't you invest in yourself?
                Education money can be used to purchase books, CD’s, courses or anything else that
                has educational value.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="jar-img"
              src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Emergency Funds Jar"
            />
            <div className="jar-info-container">
              <h2 className="jar-info-title">
                Emergency Funds Jar <br /> (EFU - 10%)
              </h2>
              <p className="jar-info-text">
                The money available in this jar should be no less than 3x your "Necessities", in
                order to ensure that, if something happens and you lose your money, you always have
                money available to survive for at least 3 months.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="jar-img"
              src="https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Give Away Jar"
            />
            <div className="jar-info-container">
              <h2 className="jar-info-title">
                Give Away Jar <br /> (GAW - 5%)
              </h2>
              <p className="jar-info-text">
                Money in this jar is for giving away. Ex: gifts for family and friends on birthdays,
                special occasions and holidays; donating to your favourite charity and supporting a
                fundraising event.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeView;
