<?php
    require_once('constant.php');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <style>
        body {
            margin: 0;
            /* background-color: #2B3A45; */
            /* Set background color for body */
        }

        a {
            text-decoration: none;
            color: #000000;
        }

        /* div {
            color: #000000;
            padding: 10px;
        } */
        .container {
            margin-top: 3px;
            /*add the small margin at top*/
            background-color: #2E4272;
            display: flex;
            height: 100vh;
            /*spans 100% of vert. viewport*/
            padding: 0px;
        }

        .left-col {
            background-color: #2B3A45;
            width: 200px;
        }

        .middle-col {
            background-color: #ffffff;
            flex-grow: 1;
        }

        .right-col {
            background-color: #D5D5D5;
            width: 200px;
        }

        nav {
            display: flex;
            background-color: #ffffff;
            align-items: center;
            /*vert align*/
            justify-content: flex-end;
            /*makes nav ele. right aligned*/
            white-space: nowrap;
        }

        nav li {
            padding-right: 20px;
            display: inline;
            /*horizontal align*/
        }

        .logo {
            padding-left: 20px;
            margin-right: auto;
            /*make logo left aligned*/
        }

        .icon {
            height: 35px;
            width: 35px;
        }

        .settingIcon {
            width: 33px;
            height: 30px;
        }

        .profileIcon {
            height: 40px;
            width: 40px;
        }

        .iconContainer {
            display: flex;
            align-items: center;
        }
    </style>
</head>

<body>
    <div>
        <?php echo $constObj['currentTasks'];?>
    </div>
</body>

</html>