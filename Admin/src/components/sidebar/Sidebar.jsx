import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';          //SvgIcon components. It depends on @mui/material, which requires Emotion packages
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="top">
                <span className="logo">Upadmin</span>
            </div>
            <hr/>         {/*  hr use to get line */}
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span> Dashboard</span>
                    </li>    
                    <p className="title">LIST</p>
                    <li>
                        <Person2OutlinedIcon className="icon" />
                        <span> Users</span>
                    </li>
                
                    <li>
                        <StoreIcon className="icon" />
                        <span> Products</span>
                    </li>                
                    <li>
                        <CreditCardIcon className="icon" />
                        <span> Orders</span>
                    </li>
                
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span> Dilivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span> Notification</span>
                    </li>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span> Stats</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span> System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span> Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span> Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span> Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span> Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">      {/*give chose color options in dashbord*/}
                <div className="colorOption"></div>       
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar