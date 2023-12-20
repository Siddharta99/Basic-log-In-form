<!DOCTYPE html>
<html lang="en">
<head>
  <title>Little Lemon</title>

  <meta property="og:title" content="Our Menu">
  <meta property="og:type"  content="website">
  <meta property="og:image" content="logo.png">
  <meta property="og:url"   content="https://littlelemon/">
  <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="Little Lemon">

  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <img src="logo.png" alt="Little Lemon Logo">
  </header>
  <main>
    <form action="/login" method="post">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required minlength="2">

      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required minlength="2">
      </div>
      <button type="submit">Log In</button>
    </form>
  </main>
</body>

</html>