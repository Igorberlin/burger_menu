import "./menu.css"
const Menu = ({ header, items, setActive, active }) => {
    return (
        <div className={active ? 'menu active': 'menu' } onClick={()=>setActive(false)}>
            <div className="blur">
                <div className="menu-content" onClick={e=>e.stopPropagation()} >
                    <div className="menu-header">{header}</div>
                    <ul>
                        {items.map((item) => 
                            <li>
                                <a href={item.href}>{item.value}</a>
                                <i class="material-icons">{item.icon}</i>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    )
    
}
export default Menu;