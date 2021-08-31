import React from "react";
import PropTypes from "prop-types";

const Square = ({ value, chooseSquare }) => {
	return (
		<div className="square" onClick={chooseSquare}>
			{value}
		</div>
	);
};

Square.propTypes = {
	value: PropTypes.string,
	chooseSquare: PropTypes.func
};

export default Square;
