import React from 'react';

const HomeView = () => {
  return (
    <>
      <header className="App-header">
        <h1>JARS Financial Management System</h1>
      </header>
      <main>
        <div className="card">
          <img src="" alt="Necessities Jar" />
          <div className="jar-info">
            <h2>Necessities Jar (NEC - 55%):</h2>
            <p>
              This account is for managing your everyday expenses and bills. This would include
              things like your rent, mortgage, utilities, bills, taxes, food, clothes, etc.
              Basically it includes anything that you need to live, the necessities.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="Play Money Jar" />
          <div className="jar-info">
            <h2>Play Money Jar (PLM - 10%):</h2>
            <p>
              The purpose of this jar is to nurture yourself. You could purchase an expensive bottle
              of wine at dinner, get a massage or go on a weekend getaway. Play can be anything your
              heart desires. You and a spouse can each receive your own play money, and not even ask
              what the other person spends it on!
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="Investment for the Future Jar" />
          <div className="jar-info">
            <h2>Investment for the Future Jar (IFF - 10%):</h2>
            <p>
              Financial freedom. The money that you put into this jar is used for investments and
              building your passive income streams. You never spend this money. The only time you
              would spend this money is once you become financially free. Even then you would only
              spend the returns on your investment. Never spend the principal.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="Educate Yourself Jar" />
          <div className="jar-info">
            <h2>Educate Yourself Jar (EDU - 10%):</h2>
            <p>
              You are you're most valuable asset, so why shouldn't you invest in yourself? Education
              money can be used to purchase books, CD’s, courses or anything else that has
              educational value.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="Emergency Funds Jar" />
          <div className="jar-info">
            <h2>Emergency Funds Jar (EFU - 10%):</h2>
            <p>
              The money available in this jar should be no less than 3x your "Necessities", in order
              to ensure that, if something happens and you lose your money, you always have money
              available to survive for at least 3 months.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="" alt="Give Away Jar" />
          <div className="jar-info">
            <h2>Give Away Jar (GAW - 5%):</h2>
            <p>
              Money in this jar is for giving away. Ex: gifts for family and friends on birthdays,
              special occasions and holidays; donating to your favourite charity and supporting a
              fundraising event.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeView;
