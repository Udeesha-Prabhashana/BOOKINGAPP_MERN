import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users"
            }
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