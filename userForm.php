<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UserForm</title>
</head>
<body>
    <form action="http://localhost/atarod-api-backend/adduser.php" method="post">
    <label for="fullName" style="margin-right: 20px ;" >نام</label>
    <input type="text" name="fullName" placeholder="لطفا نام خود را وارد نمایید">
    <br>
    <br>
    <br>
    <label for="userName" > نام کاربری</label>
    <input type="text" name="userName" placeholder="لطفا نام خانوادگی خود را وارد نمایید">
    <br>
    <br>
    <br>
    <label for="email"> ایمیل</label>
    <input type="text" name="email" placeholder="لطفا شماره تماس خود را وارد نمایید">
    <br>
    <br>
    <br>
    <br>
    <label for="city"> شهر</label>
    <input type="text" name="city" placeholder="لطفا شماره تماس خود را وارد نمایید">
    <br>
    <br>
    <br>
    <br>
    <label for="street"> خیابان</label>
    <input type="text" name="street" placeholder="لطفا شماره تماس خود را وارد نمایید">
    <br>
    <br>
    <br>
    <br>
    <label for="state"> منطقه</label>
    <input type="text" name="state" placeholder="لطفا شماره تماس خود را وارد نمایید">
    <br>
    <br>
    <br>
    <br>
    <label for="postalCode">کد پستی </label>
    <input type="text" name="postalCode" placeholder="لطفا شماره تماس خود را وارد نمایید">
    <br>
    <br>
    <br>
    <br>

    <input type="submit" value="ارسال فرم">
    </form>
</body>
</html>