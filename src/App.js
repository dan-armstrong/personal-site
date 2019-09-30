import React, {Component} from 'react';
import AOS from 'aos';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Section, SectionLink, SubSection, ImageSection, ImageSubSection} from './Section';
import Header, {HeaderBuffer} from './Header';
import Landing from './Landing';
import './App.css';

import samplingPlanner from './SamplingPlanner.png';
import dmrrtPlanner from './dmrrtPlanner.png';
import plannerRender from './renders/planner.png';
import lemmingsRender from './renders/lemmings.png';
import mazeRender from './renders/maze.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init({offset: 0, delay: 0, duration: 300})
    this.setState({mounted: true});
  }

  render() {
    return (
      <>
        <div className="MobilePage d-xs-none">
          <BrowserRouter>
            <Page>
              <About/>
              <Projects/>
            </Page>
          </BrowserRouter>
        </div>
        <div className="d-none d-xs-inline">
          <BrowserRouter>
            <Route render={({location}) => {
              const {pathname} = location;
              const curPath = pathname;
              const prevPath = this.state.prevPath ? this.state.prevPath : curPath;
              if (curPath !== this.state.prevPath) {
                this.setState({prevPath: curPath})
              }
              return (
                <SwitchTransition>
                  {this.state.mounted && (
                    <CSSTransition key={curPath.length > 1} classNames="landing"
                      timeout={{enter: curPath === "/" ? 1000 : 300, exit: prevPath === "/" ? 700 : 300}}>
                      <Switch location={location}>
                        <Route exact path="/">
                          <Landing/>
                        </Route>
                        <Route path="">
                          <Page>
                            <SwitchTransition>
                            <CSSTransition key={curPath} classNames="page" timeout={300}>
                            <div>
                              <Switch location={location}>
                                <Route exact path="/about">
                                  <About/>
                                </Route>
                                <Route exact path="/projects">
                                  <Projects/>
                                </Route>
                                <Route path="/projects/planner">
                                  <PlannerProject/>
                                </Route>
                                <Route path="/projects/lemmings">
                                  <LemmingsProject/>
                                </Route>
                                <Route path="">
                                  <About/>
                                </Route>
                              </Switch>
                            </div>
                            </CSSTransition>
                            </SwitchTransition>
                          </Page>
                        </Route>
                      </Switch>
                    </CSSTransition>
                  )}
                </SwitchTransition>
              );
            }}/>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
/*
<div className="MobilePage d-xs-none">
  <Page>
    <About/>
    <Projects/>
  </Page>
</div>
*/

class Page extends Component {
  render() {
    return (
      <div className="Page container-fluid">
        <Header/>
        <PageContent>
          {this.props.children}
        </PageContent>
      </div>
    );
  }
}

class PageContent extends Component {
  render() {
    return (
      <div className="PageContent">
        {this.props.children}
      </div>
    );
  }
}


class About extends Component {
  render() {
    return (
      <>
        <Section title="BACKGROUND">
          I'm Dan: a second-year computer scientist at the <SectionLink link="http://www.cs.ox.ac.uk/">University of Oxford</SectionLink>.
          I've just finished a summer internship at <SectionLink link="https://www.ocadotechnology.com/">Ocado Technology</SectionLink>, where I worked on path planning for autonomous robots.
          As a programmer, I'm interested in projects that push boundaries - whether these be personal, technological or societal.
          Each of my personal projects represents something I wanted to teach myself about - whether it be robotics, machine learning or full-stack web development.
        </Section>
        <Section title="INTERESTS">
          I grew up by the beach in <SectionLink link="https://www.google.com/maps/place/Devon/@50.7187771,-4.9046437,8z/data=!3m1!4b1!4m5!3m4!1s0x486bf8abdac00247:0x12c6ba0cca9c58fd!8m2!3d50.7155591!4d-3.530875">Devon, UK</SectionLink> and most of my hobbies are centered around being in the water.
          I spend as much time as I can surfing, but also do a lot of climbing, ice hockey and sailing when the waves run out.
          I also volunteer at my local <SectionLink link="https://www.totnescinema.co.uk/web/index.html">community cinema</SectionLink> when back home.
          Growing up by the ocean has given me a huge amount of respect for our environment, and I'm really passionate about conservation.
          As president of the <SectionLink link="http://www.ousurf.co.uk/">Oxford Surf Club</SectionLink> I've tried to help fight back against marine pollution, organising beach cleanups in partnership with Surfers Against Sewage.
        </Section>
        <Section title="EXPERIENCE">
          <SubSection title="RESEARCH INTERN, OCADO TECHNOLOGY" date="Jul 2019 - Aug 2019">
            At Ocado I spent 2 months interning in the advanced research (10x) team, researching path planning algorithms for mobile robots in complex indoor environments.
            I was lucky enough to be surrounded by some incredibly talented people and learned a huge deal from everyone there; from robotics and reinforcement learning to electronics and design engineering.
            My work culminated in me designing my own path planning algorithm to mitigate some of the issues I discovered within existing planners.
            Because of my contributions, I was asked to write a paper on my work (still being drafted - watch this space!).
          </SubSection>
          <SubSection title="TECHNOLOGY OFFICER, MAGDALEN BALL" date="May 2019 - Jun 2020">
            As the technology officer for the 2020 Magdalen ball, I built an online ticketing site to handle ticket purchases using a Node.js/React stack.
            It handles payments through Stripe and will save the committee £7000 in fees.
            I am also in charge of web design for the main ball website.
          </SubSection>
        </Section>

        <Section title="EDUCATION">
          <SubSection title="UNIVERSITY OF OXFORD" date="2018 - 2021">
            I'm currently studying for a BA in Computer Science at <SectionLink link="http://www.magd.ox.ac.uk/">Magdalen College</SectionLink>.
            I'm taking modules in machine learning, algorithms, data structures and artificial intelligence.
            This year I was awarded the Demy Scholarship by my college, for outstanding results in first year examinations (I placed 11th in the year).
          </SubSection>
          <SubSection title="EXETER MATHEMATICS SCHOOL" date="2016 - 2018">
            I studied 3 A Levels in Maths (A*), Further Maths (A*) and Computer Science (A*), as well as an AS Level in English Literature (A).
            Here I learned about data structures, search & sorting algorithms and the fundamentals of the Internet.
            I took classes on TCP/IP and other network protocols, as well as SQL and computer architecture.
          </SubSection>
        </Section>

        <Section title="SKILLS" hideMobile="true">
          <div className="row">
            <div className="col-6 col-xxs-4">
              <SubSection title="LANGUAGES">
                Python <br/> Java <br/> HTML/CSS <br/> JavaScript <br/> Scala <br/> Haskell <br/> R
              </SubSection>
            </div>
            <div className="col-6 col-xxs-4">
              <SubSection title="FRAMEWORKS">
                React <br/> Node <br/> Django <br/>
              </SubSection>
            </div>
            <div className="col-6 col-xxs-4">
              <SubSection title="TOOLS">
                PostgreSQL <br/> Windows & Unix <br/> Git <br/> Bash
              </SubSection>
            </div>
          </div>
        </Section>
      </>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <>
        <ImageSection title="FEATURED PROJECTS">
          <ImageSubSection title="DM-RRT" image={plannerRender} internalLink="/projects/planner">
            Path planner for autonomous robots, built in Python
          </ImageSubSection>
          <ImageSubSection title="IMAGE-BASED MAZE SOLVING" image={mazeRender} externalLink="https://github.com/dan-armstrong/image-based-maze-solver" flip={true}>
            Solves maze from bitmap image using frequency analysis and A* pathfinding, built in Python and R
          </ImageSubSection>
          <ImageSubSection title="LEMMINGS" image={lemmingsRender} internalLink="/projects/lemmings">
            Self-driving car experiment using genetic algorithms and neural networks, using Processing/Java
          </ImageSubSection>
				</ImageSection>
      </>
    );
  }
}

class PlannerProject extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <Section title="DM-RRT">
        <SubSection title="INTRODUCTION">
          During my internship at Ocado, I researched path planning algorithms for mobile robots in complex indoor environments.
          After a lot of reading, I found two classes of algorithms that were suited to what I wanted to do: sampling planners and diffusion map planners.
        </SubSection>
        <SubSection title="SAMPLING PLANNERS">
          Sampling planners find paths by incrementally growing a graph of the environment, where each node represents a free state in the environment and each edge is a free path between two states.
          Three steps are used to grow the graph at each iteration.
          1: Randomly sample a free state (xrand, red) in the environment.
          2: Find the state’s nearest neighbour (xnear, green).
          3: If the path between the new state and the nearest neighbour is free, add the new state to the graph.
          <img src={samplingPlanner} alt="" className="d-none d-xs-inline" style={{maxWidth: "100%", padding: "0.75rem 0rem"}}/>
          Whilst different sampling planners may differ in how they initialise the graph and can do different things to grow the graph towards xrand, they all rely heavily on euclidean nearest-neighbour queries.
          These types of planners work very well in open spaces but struggle in narrow passageways because euclidean distance is a poor barometer for cost-to-go between points.
          Take two points on opposite sides of a wall: while close in euclidean distance, actual cost-to-go is much larger as you must go around the wall.
          As indoor spaces are littered with narrow passageways, these planners performed poorly in typical environments.
        </SubSection>
        <SubSection title="DIFFUSION MAP PLANNERS">
          Diffusion maps are a non-linear dimensionality reduction technique, borrowed from machine learning.
          A grid map of the environment is created and matrix operations are then used to map each point in the grid space into a new k-dimensional diffusion space, for some small integer k (k=10 is normally sufficient to capture the underlying structure of the environment).
          In the diffusion space, the distance between each pair of points is a much better approximation of cost-to-go than distance in the original space.
          <br/><br/>Once you have the diffusion map, it can be used to find paths in several ways. A simple gradient descent can be used, starting at the robot’s current position and at each stage choosing the neighbouring node that minimises the diffusion distance to the goal. Alternatively, diffusion distance can be used as a heuristic to guide an A* grid search. However in practice both of these methods fail in complex environments: the first relies too heavily on the approximate diffusion map and finds sub-optimal paths, whereas the second is simply too slow.
        </SubSection>

        <SubSection title="DIFFUSION MAP RAPIDLY-EXPLORING RANDOM TREE (DM-RRT)">
          To combat this, I devised an algorithm that combined both planners in the hope this would alleviate the issues found in each. When growing the tree, xnear can be chosen as the point closest to xrand in diffusion space instead of the point closest in euclidean space. As diffusion distance is a good approximation of cost-to-go, this ensures that xnear is easily  reachable from xrand, instead of being separated by a wall. This change allows trees to be grown rapidly through narrow environments - shown clearly in the image below. Without the diffusion-based nearest neighbours, the tree fails to explore the environment fully. After the same number of iterations, the diffusion-based planner has explored the entire environment.
          <img src={dmrrtPlanner} alt="" className="d-none d-xs-inline" style={{maxWidth: "100%", padding: "0.75rem 0rem"}}/>
        </SubSection>
      </Section>
    );
  }
}


class LemmingsProject extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <Section title="LEMMINGS">
        <SubSection title="INTRODUCTION">
          Lemmings is an experiment into self-driving cars. It uses neural networks to teach the bots how to navigate the race course, with the learning being achieved by evolutionary algorithms. Behind the text is an example of the program in action, with each pink/blue dot representing a single bot (or lemming, as they are affectionately known). Be patient, the video may take a small amount of time to lead. The blue bots represent the best 15% from the previous generation. The bots are entirely implemented by my own code from the ground-up: no TensorFlow, no scikit-learn and no matrix libraries.
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/kRsj2T69STA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </SubSection>
        <SubSection title="BOT STRUCTURE">
          Each bot has ten equidistant range sensors that form a circle around it. These measure the distance to the nearest wall. The bots also have three additional sensors: a speed sensor that detects the current speed, and sensors that detect the direction and distance to the next corner. They are controlled using acceleration and steering inputs, each of which ranges from -1 (max braking or hard left) to 1 (max accelerator or hard right).
        </SubSection>
        <SubSection title="NETWORK STRUCTURE">
          The bot is driven by a feed-forward neural network. The network has three layers, with 13 neurons in the input layer, 6 neurons in the hidden layer and 2 neurons in the output layer. The 10 proximity sensors, speed sensor and the two sensors responsible for distance & direction to the next corner make up the 13 input neurons. The proximity sensors range from 0 (the bot is touching the wall) to 1 (the bot is outside the maximum range of the sensor). The speed sensor ranges from -1 (max reverse) to 1 (max forward). The corner direction sensor also ranges from -1 (180° left) to 1 (180° right). The network is feed-forward, which means every node in the current layer is connected to every node in the next layer, and so on. The 2 output neurons represent the bot's two controls: steering and acceleration. Each ranges from -1 to 1.
        </SubSection>

        <SubSection title="LEARNING">
          The network learns through an evolutionary algorithm, whereby each bot is assigned a score and bots with the greatest score are kept to be bred for the next generation. The score is calculated by the distance the bot has travelled around the course. If the bot completes the course, a completion bonus is added as well as a speed factor. The bots are then ordered by score, highest to lowest. The top 15% of bots are kept and added to the new generation. This top 15% are then mutated slightly to create the next 40%. Bots are then randomly selected (with higher-scoring bots weighted more) and mutated to create the next 20%. Bots are then bred and mutated to make up the rest of the next generation, with each generation having 75 bots.
          With these techniques, I was able to create neural networks that could race any track I gave them. Random courses were generated and the bots performed well on them when trained on different data, proving overfitting was not an issue.
        </SubSection>
      </Section>
    );
  }
}

export default App;
