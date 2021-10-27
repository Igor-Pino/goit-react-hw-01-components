import propTypes from 'prop-types';

function StatisticalSection({ title, children }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

StatisticalSection.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default StatisticalSection;
