import React from 'react';

function Footer() {
	const styles = {
		footer: {
			backgroundColor: 'red'
		},
		p: {
			color: 'green'
		}
	};

	return (
		<footer style={styles.footer}>
			<h2>This is my contact information.</h2>
			<address>
				<p style={styles.p}>1234 Main St., California</p>    
			</address>
		</footer>
	);
}

export default Footer;