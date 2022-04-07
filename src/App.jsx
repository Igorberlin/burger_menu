import { useState } from "react";
import "./App.css";
import Menu from "./menu/Menu";

const App = () => {
    const [menuActive, setMenuActive]=useState(false)
    const items = [
        { value: 'main', href: '/main', icon: 'all_inclusive' },
        { value: 'services', href: '/services', icon: 'airplanemode_active' },
        { value: 'about', href: '/about', icon: 'account_circle' }
    ]
    return (
        <div className="App">
            <nav>
                <div className="burger-btn" onClick={()=>setMenuActive(!menuActive)}>
                    <span />
                </div>
            </nav>
            <main>
                <p>At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?</p>

                <p>At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?</p>

                <p>At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?</p>

                <p>At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?</p>

                <p>At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?At iste voluptatum itaque temporibus reiciendis voluptate quasi minima sequi asperiores quos fugiat harum nam nulla cupiditate maiores eveniet eaque eligendi deleniti dolores, blanditiis ducimus atque? Beatae fugiat quasi excepturi?</p>
            </main>
            <Menu active={menuActive} setActive={setMenuActive} header={"Burger menu"} items={items}/>
        </div>
    );
}

export default App;
