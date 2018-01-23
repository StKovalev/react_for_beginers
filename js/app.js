console.log(React);
console.log(ReactDOM);

const photos = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg']
const news = [
    {
        author: 'Саша Печкин',
        text: '111111111111'
    },
    {
        author: 'Вася',
        text: '2222222222'
    },
    {
        author: 'Печкин',
        text: '3333333333'
    }
]

class App extends React.Component {
	render() {
		return (
			<div className="app">
                Component React
                <Photos photos="photos" />
                <LastNews data={news} />

            </div>
		)
	}
}

class Photos extends React.Component {
    render() {
        return (
            <div className="Photos">
                Фото нет
            </div>
        )
    }
}

class LastNews extends React.Component {
    render() {
        const data = this.props.data;
        let newsTemplate;
        
        if(data.length < 0){
            newsTemplate = data.map(function(item, index){
                return (
                    <div key={index}>
                        <p className='news__author'>{item.author}</p>
                        <p className='news__text'>{item.text}</p>
                    </div>
                );
            })
        }else{
           newsTemplate = <p>Новостей нет</p>
        }
        

        console.log(newsTemplate);

        return (
            <div className="News">
                {newsTemplate}
                <div className={data.length < 0 ? '' : 'none'}>Всего новостей: {data.length}</div>
            </div>
        )
    }
}

class Comments extends React.Component {
    render() {
        return (
            <div className="Comments">
                Нет коментариев
            </div>
        );
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);