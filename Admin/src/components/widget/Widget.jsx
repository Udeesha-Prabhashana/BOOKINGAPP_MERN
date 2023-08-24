import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon" />,
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" />,
            };
            break;
        case "erarning":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" />,
            };
            break;
        case "balance":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" />,
            };
            break;
        default:
            break;
        
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">USER </span>
                <span className="counter">12323 </span>
                <span className="link">See all user </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </div>
                    <PersonOutlinedIcon className="icon"/>
            </div>
        </div>
    )
}

export default Widget