import PropTypes from 'prop-types';
import SectionCss from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={SectionCss.section_name}>{title}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
