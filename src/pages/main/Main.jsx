import { Navbar, Home, About, Prize, Sponsors, Team, Footer } from "../../components";
import "./main.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";

const Main = () => {
    return (
        <>
            <Router>
                <Navbar />
                <ErrorBoundary>
                    <Switch>
                        <main className="main">
                            {/* <Route exact path="/" component={ Home } />
                        <Route path="/about" component={ About } />
                        <Route path="/prize" component={ Prize } />
                        <Route path="/sponsors" component={ Sponsors } />
                        <Route path="/team" component={ Team } /> */}
                            <Home />
                            <About />
                            <Prize />
                            <Sponsors />
                            <Team />
                            {/* <Faq /> */}
                            {/* TODO: */}
                            {/* <Schedules /> */}
                        </main>
                    </Switch>
                </ErrorBoundary>
                <Footer />
            </Router>
        </>
    )
}

export default Main
