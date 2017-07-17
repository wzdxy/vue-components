let liStr='';
let navList=[
    {name:'Index',href:'index.html'},
    {name:'下拉选择',href:'select.html'},
    {name:'标签编辑器',href:'tag-editor.html'},
    {name:'单选',href:'single-checkbox.html'}
]
navList.forEach(function(item) {
    liStr+='<li style=""><a href="'+item.href+'">'+item.name+'</a></li>';
}, this);

document.write('<nav id="nav">'+'<ul >'+liStr+'</ul>'+'</nav>');

document.write('<style>'
+'nav#nav{position:fixed; right:5px; top:5px; display:inline-block}'
+'nav#nav>ul{background-color:#ccc; margin:0; padding:5px}'
+'nav#nav>ul>li{list-style:none;}'
+'nav#nav>ul>li:hover{background-color:#999;}'
+'nav#nav>ul>li>a{color:#000; width:100%; display: inline-block; text-decoration: none; font-size:1.2rem;}'
+'</style>')