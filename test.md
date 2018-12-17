# Tutorial: Creating a Real-Time Bitcoin Ticker Dashboard in React

Bitcoin, the popular cryptocurrency that’s going to replace traditional fiat currency in the future - say many crypto enthusiasts. Well, that’s a fact that’s becoming more of fiction, specially after last year, when Bitcoin prices rose up astronomically to potentially hit the $20,000 mark. While the entire world has been hoping for Bitcoin to rise and stabilize, in reality the currency has fallen and remains unstable. As more trading portals and online websites monitor bitcoin price fluctuations, it’s very important to monitor these real-time changes during trading of bitcoin and other crypto currencies.

On that note, I’ve built a real-time bitcoin ticker dashboard in React. This tutorial gives a step by step guide on how to create this mini dashboard, using the Bitcoin API. The tutorial is developed in React, a JS library for building user interfaces, Cryptonator API,  that provides unique volume of cryptocurrency exchange rates data delivered in easy-to-integrate JSON format and [FusionCharts](https://www.fusioncharts.com/), a JavaScript based charting library for data visualization.

By the end of this tutorial, you will be able to build a Real-Time Cryptocurrency Dashboard like this:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544871811507_Screenshot+2018-12-15+16.33.16.png)

Check out the Bitcoin Ticker Live Dashboard [here](https://sowmyaraj92.github.io/react_bitcoin_ticker/).

> The 3 KPIs on top showcase real-time values of top cryptocurrencies like Bitcoin, Litecoin and Etherium. This line-chart below the KPIs demonstrate a Bitcoin Ticker where the variation in bitcoin prices are captured. The x-axis denotes the timestamp variation and y-axis indicates the bitcoin prices in $.


## **STEP 1: Create My-App**

Using Create React-App is one of the best way to set up the development environment. This provides the latest JavaScript features, enhances the developer experience and optimises the app for production.

 To create a project, open terminal and run:

    npx create-react-app my-app
    cd my-app

where *my-app* is the working directory where React will be installed with other utilities.
Also, this creates a front-end build pipeline, so that we can use it with any back-end database we want.

To know more about `create-react-app` , you can check this [link](https://facebook.github.io/create-react-app/).


> Note: The working directory should contain a [package.json](https://docs.npmjs.com/files/package.json). If the package is not present, then you can create it with the command : `npm init -y`

Now, let’s run the below command and observe the development server:


    npm start


![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544844862186_Screenshot+2018-12-15+09.03.44.png)

The default browser loads a webpage on the localhost:3000, and the default React app will be loaded.  
 
Open the project in your code editor, and now you are good to go with. Your project structure will look like this:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544845445000_Screenshot+2018-12-15+09.12.13.png)


## **STEP 2:** **Including FusionCharts Package and its React Component**

We will be using FusionCharts to render the charts in our dashboard. To learn more about FusionCharts, visit this [link](https://www.fusioncharts.com/).

There are numerous ways to install FusionCharts, for general instructions you can check out [Fusion Charts Documentation Page](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript#installation-1).


> **FusionCharts** **Direct Download**
> You can directly download JS files from FusionCharts website using this [link](https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=react) and include them in your application using `<script>` tag in `/public/index.html` of our dashboard app.

Once the my-app is created, run the commands in the terminal to install the FusionCharts package:


    npm install fusioncharts --save

FusionCharts also provides React-component that can be used to add JS charts in our app without any difficulty. To check them out, click [here](https://github.com/fusioncharts/react-fusioncharts-component).

    npm install react-fusioncharts --save


## **STEP 3: Setting up the Cryptonator API** 

The **Cryptonator API** data source is defined at the top of the script tag. The API returns a JSON dump, which we have converted as the JavaScript object "data" (passed on to this function as an argument).

Given below is the API URL, this will fetch the real-time data for the Bitcoin Ticker: [https://api.cryptonator.com/api/ticker/btc-usd](https://api.cryptonator.com/api/ticker/btc-usd) 


![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544844073719_Screenshot+2018-12-15+08.50.44.png)


Navigate to the requested URL, and the values returned should be visible in the browser. Furthermore, replace `btc-usd` with the currency codes like `eth-usd`, `ltc-usd` to fetch the values of Ethereum and Litecoin.


> **IMPORTANT :** You may encounter a CORS issue while using the Cryptonator API, where your server may be blocked after sending repeated requests to the API. You can learn more about the CORS issue you may face here: [http://cors.io/](http://cors.io/) . One quick way to bypass the CORS issue is by using AWS Lambda for server-less architecture or setting up a backend server and making requests via it. Check the below code snippet to implement this method.


     class Body extends React.Component{
        constructor(props){
            super(props);
            this.BASE_URL = 'https://cors.io/?https://api.cryptonator.com/api/ticker/';
            // Initialise values 
            }
        }      

Before going ahead make sure that your  `package.json` match the following:


    {
      "name": "my-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "fusioncharts": "^3.13.3",
        "react": "^16.6.3",
        "react-dom": "^16.6.3",
        "react-fusioncharts": "^2.0.7",
        "react-scripts": "2.1.1"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },
      "eslintConfig": {
        "extends": "react-app"
      },
      "browserslist": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
      ]
    }

Now, let’s get into the detailed dashboard structure.

## **STEP 4 : Building the Layout and Dashboard**

I have used Bootstrap 4 here to build this responsive dashboard. With new components, responsive structures and styles, it is a consistent framework that supports majority of all browsers and CSS compatibility fixes.


- To include Bootstrap, run the command: `npm install Bootstrap`


- After installation, import Bootstrap in the app: 
`import 'bootstrap/dist/css/bootstrap.min.css';`

Here’s how the final dashboard will look like:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544871811507_Screenshot+2018-12-15+16.33.16.png)


The dashboard on the page is divided into 3 parts: 

1. **Dashboard Section**
2. **KPI Section**
3. **Charts Section**

**Creating the** **Navigation Section:**
To create the navigation bar,  we will be using the navbar component of Bootstrap. The header is enclosed within `container`  and `{branding}` holds the text for the Header. Here’s how `Header.js` looks like:


    import React from 'react';
     
    const Header = (props) => {
        const {branding} = props;
        return (
            <nav className ="navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left">
                <div className="container">
                    <a href="/" className="navbar-brand">{branding}</a>
                     <ul className="navbar-nav mr-auto-right"  alt ="fireSpot">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <img src={'fclogo.svg'} width="145" alt="" />
                            </li>
                        </ul>     
                    </ul> 
                </div>
            </nav>
        );
    }
    Header.defaultProps = {
        branding :'Real-Time Cryptocurrency Dashboard'
    };
    export default Header;  

**Creating the** **KPI Section:**
The KPI values are fetched by sending  GET request to Cryptonator API and procuring the data in JSON format. We have utilised `getDataFor()` function for obtaining the cryptocurrency values.

The `componentDidMount()` method of the child components is invoked before that of parent components.

The `Base URL + conversion(btc-usd/eth-usd/ltc-usd)` fetches the `Cryptonator API` and `d.ticker.price` returns the price of the cryptocurrency.

For Bitcoin, the ticker is plotted against **`Local Time`** in the x-axis vs **`Price in USD`** in the Y-axis.
To obtain the timestamp, the function `clientDateTime()` is used. This returns the current time and the graph gets updated at an interval of 2 seconds.

The function `startUpdatingData()` involves updating the chart with the dynamic values. **feedData()** method provided by FusionCharts is used to feed data into the chart. Also, [**feedData**](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#feedData) takes care of any delay that occurs during auto refresh or on page load. 


    componentDidMount() {
            this.getDataFor('btc-usd', 'btcusd');
            this.getDataFor('ltc-usd', 'ltcusd');
            this.getDataFor('eth-usd', 'ethusd');
        }
        startUpdatingData(){
            setInterval(() => {
                fetch(this.BASE_URL + 'btc-usd')
                .then(res => res.json())
                .then(d => {
                    let x_axis = this.clientDateTime();
                    let y_axis = d.ticker.price;
                    this.chartRef.feedData("&label=" + x_axis + "&value=" + y_axis);
                });
            }, 2000);
        }
    
        getDataFor(conversion, prop){
            fetch(this.BASE_URL + conversion, {
                mode: 'cors'
            })
            .then(res => res.json())
            .then(d => {
                if(prop === 'btcusd'){
                        const dataSource = this.state.dataSource;
                        dataSource.chart.yAxisMaxValue =  parseInt(d.ticker.price) + 5;
                        dataSource.chart.yAxisMinValue =  parseInt(d.ticker.price) - 5;
                        console.log(JSON.stringify(dataSource))
                        dataSource.dataset\[0\]['data'][0].value = d.ticker.price;
                            this.setState({
                                showChart: true,
                                dataSource: dataSource,
                                initValue: d.ticker.price
                            }, ()=>{ 
                                        this.startUpdatingData();
                                    })
                }
                    this.setState({
                    [prop]: d.ticker.price
                });
                        })
            
        }   
        static addLeadingZero(num) {
            return (num <= 9) ? ("0" + num) : num;
        }
        clientDateTime() {
            var date_time = new Date();
            var curr_hour = date_time.getHours();
            var zero_added_curr_hour = Body.addLeadingZero(curr_hour);
            var curr_min = date_time.getMinutes();
            var curr_sec = date_time.getSeconds();
            var curr_time = zero_added_curr_hour + ':' + curr_min + ':' + curr_sec;
            return curr_time
        }
        getChartRef(chart){
            this.chartRef = chart;
        }
    render(){
            return (
            <div className="row mt-5 mt-xs-4">
                <div className="col-12 mb-3">
                     <div className="card-deck custom-card-deck">
                        <PriceCard header="Bitcoin(BTC)" src={'/bitcoin.png'} alt="fireSpot" label="(Price in USD)"   value={this.state.btcusd} />
                        <PriceCard header="Litecoin(LTC)"   src={'/litecoin.png'} alt="fireSpot" label="(Price in USD)"  value={this.state.ltcusd}/>
                        <PriceCard header="Ethereum(ETH)" src={'/ethereum.png'} alt="fireSpot" label="(Price in USD)"    value={this.state.ethusd}/>
                     </div>          
                </div>
                    <div className="col-12">
                        <div className="card custom-card mb-5 mb-xs-4">
                            <div className="card-body">
                                {
                                this.state.showChart ? 
                                <ReactFC 
                                {...this.chartConfigs}
                                dataSource={this.state.dataSource} 
                                onRender={this.getChartRef.bind(this)}/>: null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }
    }
     export default Body;


**Creating the** **Charts Section:**

**REAL-TIME CHART:** A real-time line chart is used to show the magnitude of a price in real-time. Data is updated automatically at fixed intervals by getting new data from the server, without any page refreshes. Data values are plotted on the chart as data points that are then connected using line segments. This chart can be simulated as a real-time bitcoin price monitor which updates after a fixed interval of time.


> **To access the Real-Time Data Charts provided by FusionCharts, go** ******to** [**Real-Time Charts**](https://www.fusioncharts.com/dev/chart-guide/standard-charts/real-time-charts)**.**

We now have the JSON data and the chart container in place, now let’s go ahead and create the FusionCharts instance. The details required to configure the chart are the chart type, chart ID, chart dimensions, HTML container ID, data format and so on, will be passed to this chart instance.

To create a real-time chart follow the steps given below:

- Within the JSON data, the attributes and their corresponding values can be set in the format : **`"<attributeName>" : "<value>"`**.
- The chart type is specified using the **`type`** attribute. To render a real-time line chart, set **`realtimeline`**.
-  The container object is set using the **`renderAt`** attribute.
- The dimension of the chart is specified using **`width`** and **`height`** attributes.
- The type of data `(JSON/XML)` you want to pass to the chart object, is defined using the **`dataFormat`** attribute.
```

     this.chartConfigs = {
                type: 'realtimeline',
                renderAt: 'container',
                width: '100%',
                height: '350',
                dataFormat: 'json'
            };
```

The data source required to render the real-time chart is given below:
```

    dataSource : {
                    "chart": {
                        "caption": "Bitcoin Ticker",
                        "subCaption": "",
                        "xAxisName": "Local Time",
                        "yAxisName": "USD", 
                        "numberPrefix": "$",
                        "refreshinterval": "2",
                        "slantLabels": "1",
                        "numdisplaysets": "10",
                        "labeldisplay": "rotate",
                        "showValues": "0",
                        "showRealTimeValue": "0",
                        "theme": "fusion"    
                             },
                  }

```

We can customize the functionality of a real-time chart in great detail. Take for instance, we can define refresh interval, update interval, decimal precisions, canvas or even chart margins.

Take a look at the chart to understand the parameters of the dataSource better.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544842857022_Screenshot+2018-12-15+08.29.54.png)


We will now create a file called `style.css` which will contain all the styles and CSS techniques for our dashboard. Here’s how it looks like:

```body {
    background-color: #f7f7f7 !important; 
    font-family: 'Lato', sans-serif;
}
.navbar{
   background-color: #3949ab !important;
   box-shadow :0 8px 14px 0 rgba(123, 120, 120, 0.22);
}
.navbar-brand{
    color: #fff;
}
.navbar-brand:hover{
    color: rgba(255,255,255,0.8);
}

.font-weight-700{
    font-weight: 700;
}
.custom-card{
    border: 0 ;
    box-shadow: 0px 2px 4px #bdbdbd73;
}
.card-body img {
    width: 25px;
    opacity :0.2;   
}
.card-deck > .card:nth-child(2) .card-body > img{
    width:20px;
}
@media (min-width:576px){
    .custom-card-deck .card:last-child{
        margin-right: 15px !important;
    }
}
@media (max-width:768px){
    .navbar-brand{
        width:100%;
        text-align: center;
        font-size: 1.1rem;
        white-space: normal;
    }
}
@media (max-width:575px){
    .mt-xs-4 {
        margin-top: 2rem !important;
    }
    .mb-xs-4 {
        margin-bottom: 2rem !important;
    }
}
.text-primary {
    color: #3949ab!important;
}
 img{
    opacity:0.6;
 }
```


## **STEP 5: Rendering the Chart**

The React element is rendered into the DOM within the supplied `root` and returns a reference to the component. Any previous rendering to the same ID will perform an updation on it.


    ReactDOM.render(<App />, document.getElementById('root'));

The icons(.png files) for the KPI values are uploaded to the Public folder and can be accessed from the JS part.

The KPI section after the data is retrieved from the API looks like this:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_14F022E2A722F733E1ADCEDA2475E363B376E90A26CEF5908B4CA69731F700B7_1544869391664_Screenshot+2018-12-15+15.46.49.png)


Below is the code snippet for the `render()` method:


    render(){
            return (
            <div className="row mt-5 mt-xs-4">
                <div className="col-12 mb-3">
                     <div className="card-deck custom-card-deck">
                        <PriceCard header="Bitcoin(BTC)" src={'/bitcoin.png'} alt="fireSpot" label="(Price in USD)"   value={this.state.btcusd} />
                        <PriceCard header="Litecoin(LTC)"   src={'/litecoin.png'} alt="fireSpot" label="(Price in USD)"  value={this.state.ltcusd}/>
                        <PriceCard header="Ethereum(ETH)" src={'/ethereum.png'} alt="fireSpot" label="(Price in USD)"    value={this.state.ethusd}/>
                     </div>          
                </div>
                    <div className="col-12">
                        <div className="card custom-card mb-5 mb-xs-4">
                            <div className="card-body">
                                {
                                this.state.showChart ? 
                                <ReactFC 
                                {...this.chartConfigs}
                                dataSource={this.state.dataSource} 
                                onRender={this.getChartRef.bind(this)}/>: null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }
     export default Body;            

The `App.js` for the Bitcoin component before the final render looks like this:


    import React, { Component } from 'react';
    import Header from './components/Header';
    import Body from './components/Body';
    import  'bootstrap/dist/css/bootstrap.min.css';
    import '../src/style.css';
    
    class App extends Component {
      render() {
        return (
          <div className="App">
            
            <Header branding = "Real-Time Cryptocurrency Dashboard"/>
            <div className="container">
            <Body />
            </div>
            
          </div>
        );
      }
    }
    export default App;

After the successful execution of the code, the page is loaded with the dashboard header, cryptocurrency values and the bitcoin ticker.

The Bitcoin, Litecoin and Ethereum prices (in USD) are displayed just below the dashboard header. This Bitcoin Ticker gets updated at a fixed interval of 2 seconds. Hovering on the line chart, at every tooltip the price of bitcoin at that particular timestamp can be observed. The y-axis is configured dynamically in such a way that even with any drastic change in price, the axis of the chart gets modified accordingly.

After you have implemented all the steps in this tutorial, your final dashboard will look like this:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_11EC37F9A4DE7CBA989EA1AD19CC0643E10F4DF7852A0DEAB2F7826D707020DD_1545038817860_Real-Time+Bitcoin+Ticker+Dashboard.png)


You can find the entire source code for the Bitcoin Ticker here → [Source Code](https://github.com/sowmyaraj92/react_bitcoin_ticker).


> **You can download Fusion Charts Package for React stack from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=react)**.


With the increase in data collection and aggregation, businesses now feel the need for better data visualization to take more informed decisions. [FusionCharts](https://www.fusioncharts.com/) has been successful in visualizing data sources across different industry use-cases with 28,000 customers and love from over 750,000 developers world wide. Learn more about FusionCharts and it’s new products like Data-Stories, Dashboards, Export products and more. Happy Visualizing!
