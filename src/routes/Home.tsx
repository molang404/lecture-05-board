import { useEffect, useState } from "react";

function Home() {
    // 초기값이 이미 true로 들어가기 때믄에, 타입스크입트 엔진이 loading에 대해 boolean으로 고정시킴
    // loading이라는 state는 useState 메소드를 통해 만들어지는 것이기 때문에,
    // useState<만들어지는 대상의 타입>(초기값) 으로 타입 지정을 해줄 수 있음
    const [loading, setLoading] = useState(true);

    // 초기값을 [] 해줘서, posts가 [], 배열이 되는 건 아는데
    // 그 배열 안에 어떠한 타입의 요소가 들어올지 타입스크립트는 모름 => never[] 타입으로 강제됨
    // never[]  => 배열은 배열인데, 안에 결코 요소가 들어갈 수 없는 상태

    // 앞으로 어떠한 요소가 들어가는 배열이 될지를 지정해줘야 함
    const [posts, setPosts] = useState<
        { userId: string; id: number; title: string; body: string }[]
    >([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((json: { userId: string, id: number, title: string, body: string }[]) => {
                setPosts(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return <></>;
}

export default Home;
