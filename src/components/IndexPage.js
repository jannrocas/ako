import React from 'react';
import { Droplets } from './Droplets';
import { Container, Icon } from 'semantic-ui-react';

export const IndexPage = () => (
      <div className='home'>
	<Container className="ui raised very padded text container segment">
		<p>Under Construction. . .</p>
	<section className="social">
                <a href="https://www.github.com/jannrocas" target="_blank"><Icon link name='github' size="big"></Icon></a>
		<a href="https://www.linkedin.com/in/jannrocas" target="_blank"><Icon link name='linkedin' size='big'></Icon></a>
		<a href="https://www.codepen.io/jannrocas" target="_blank"><Icon link name='codepen' size='big'></Icon></a>
        </section>
	</Container>
      	<section className="rain">
	<Droplets />
	</section>
      </div>
);

export default IndexPage;
