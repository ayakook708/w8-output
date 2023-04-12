(() => {
    const $dom = document;
    const $email = $dom.getElementById('email');
    const $password = $dom.getElementById('password');

    //ローカルストレージから表示
    $email.value = localStorage.getItem('email');
    $password.value = localStorage.getItem('password');

    const $signIn = $dom.getElementById('signIn');
    $signIn.addEventListener('click', (e) => {
        e.preventDefault();
        //ローカルストレージに保存
        localStorage.setItem('email', $email.value);
        localStorage.setItem('password', $password.value);
    });
})();
