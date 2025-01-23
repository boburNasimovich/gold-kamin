import React from 'react';

class TepagaChiqishLink extends React.Component {
  handleTepagaChiqish = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <a
        href="#"
        className="text-2xl text-white/55 hover:opacity-100 transition-transform font-bold opacity-55"
        onClick={this.handleTepagaChiqish}
      >
        Tepaga ▲
      </a>
    );
  }
}

export default TepagaChiqishLink;