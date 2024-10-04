// Page 3 - your puppy
import { PageHeader } from "./Header";
import { PageFooter } from "./footer";
import { NavBar } from "./navbar";


export function YourPuppy(props) {
    return (
    <body>
        < NavBar />
        <main>
            <section id="your-puppy-page">
            <h2>Hi Hachi!</h2>
            <article className="center">
                <section className="container">
                    <img src="img/doog 1.png" alt="A cute pixel art Shiba Inu"/>
                    <button type="button" className="btn1" id="taptap">tap</button>
                    <button type="button" className="btn2" id="feedfeed">feed</button>
                </section>
                <aside>
                    <figure className="cake"><img src="img/cake.png" alt="a cake used to feed puppy"/></figure>
                    <figure className="heart"><img src="img/heart full.png" alt="a full heart that shows puppy's health status"/>
                    </figure>
                </aside>
            </article>
            </section>
        </main>
        < PageFooter />
    </body>
    )
}