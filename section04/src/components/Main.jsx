import "./Main.css";

const Main = () => {
    const user = {
        name: 'Juan',
        isLogin: true
    };

    if (user.isLogin) {
        return <div className="logout">로그아웃</div>
    }

    return (
        <div>로그인하기</div>
    )
}

export default Main;