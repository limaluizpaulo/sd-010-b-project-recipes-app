import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
// import Card from './Card';

export default function MainCards(props) {
  const { title /* data, */ } = props;
  // console.log(data);
  return (
    <main>
      <Header title={ title } searchBar />
      <aside>Categories</aside>
      <section>
        {/* <Card data={ data[0] } /> */}
      </section>
      <Footer />
    </main>
  );
}

MainCards.propTypes = {
  title: PropTypes.string.isRequired,
  // searchBar: PropTypes.bool.isRequired,
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
