
var data = [
		//{name:"导师：张三",value:"01",sj:"-"},
		//{name:"本科生",value:"0101",sj:"01"},
		//{name:"硕士生",value:"0102",sj:"01"},
		//{name:"博士生",value:"0103",sj:"01"},
		/*{name:"茂名",value:"0104",sj:"01"},
		{name:"揭阳",value:"0105",sj:"01"},
		{name:"萝岗",value:"010101",sj:"0101"},
		{name:"天河",value:"010102",sj:"0101"},
		{name:"黄埔",value:"010103",sj:"0101"},
		{name:"白云",value:"010104",sj:"0101"},
		{name:"花都",value:"010105",sj:"0101"},
		{name:"海珠",value:"010106",sj:"0101"},
		{name:"枫溪",value:"010201",sj:"0102"},
		{name:"枫桥",value:"010202",sj:"0102"}*/
		
	];
var treeData;
var id = 1;

function deal_form(form){
	
	var s = form.split(/[\n]/);
	//alert(s[0]);
	data.push({name:s[0],value:"01",sj:"-"});
	//alert(s.length);/**/
	var gValue = "00";
	
	for(var i=1;i<s.length;i++){		
		var grade = s[i].split("：");
		//alert(grade[0]);
		
		gValue++;
		gValue.toString();
		gValue = '0' + gValue;
		var sj = "01";
		//alert(grade[0]+gValue+sj);
		data.push({name:grade[0],value:'01'+gValue,sj:sj});
		
		var name = grade[1].split("、");
		//alert(name.length);
		var nValue = "00";
		for(var j=0; j<name.length; j++){
			
			nValue++;
			nValue.toString();
			nValue = '0' + nValue;
			//alert(name[j]+gValue+nValue);
			data.push({name:name[j],value:'01'+gValue+nValue,sj:'01'+gValue})
		}
	}
	//alert(s.length);
	

}



function draw(){
	var searchform = document.getElementById("searchForm");
	var form = searchform.Form.value;
	//alert(form);
	//处理表格
	deal_form(form);
	//2.处理数据
	
	if(document.getElementById('Form').value != "")
	{treeData = transData(data, 'value', 'sj', 'children');}
	//3.展示树
	drawTree(treeData,id);
	document.getElementById('Form').value = "";
	id = id + 1;
}
 
/**2.数据处理成层级关系的数据***/ 
function transData(a, idStr, pidStr, childrenStr) {
	var r = [], hash = {}, id = idStr, pid = pidStr, children = childrenStr, i = 0, j = 0, len = a.length;
	for (; i < len; i++) {
		hash[a[i][id]] = a[i];
	}
	for (; j < len; j++) {
		var aVal = a[j], hashVP = hash[aVal[pid]];
		if (hashVP) {
			!hashVP[children] && (hashVP[children] = []);
			hashVP[children].push(aVal);
		} else {
			r.push(aVal);
		}
	}
	return r;
}
 
/**
 *3. 画树
 */
function drawTree(treeData,id) {
	if(id==1)
	{var  myChart = echarts.init(document.getElementById("container1"));//div元素节点的对象
	
	myChart.setOption({
		tooltip : {
			trigger : 'item',
			triggerOn : 'mousemove'
		},
		series : [ {
			type : 'tree',
			name : 'TREE_ECHARTS',
			data : treeData,
			top : '5%',
			left : '30%',
			bottom : '5%',
			right : '15%',
			symbolSize : 20,
			label : {
				normal : {
					position : 'left',
					verticalAlign : 'middle',
					align : 'right'
				}
			},
			leaves : {
				label : {
					position : 'right',
					verticalAlign : 'middle',
					align : 'left'
				}
			},
			expandAndCollapse : true ,
			initialTreeDepth : 2  //展示层级数,默认是2
		} ]
	});
	//4.树绑定事件
	 myChart.on('click', function(params) {
		var name = params.data.name;//点击的节点的name
		var value = params.data.value;//点击的节点的value
		//调用点击事件
		clickNode(name,value);
	});
	
	}
	else if(id==2)
	{
		var  myChart = echarts.init(document.getElementById("container2"));//div元素节点的对象
		myChart.setOption({
			tooltip : {
				trigger : 'item',
				triggerOn : 'mousemove'
			},
			series : [ {
				type : 'tree',
				name : 'TREE_ECHARTS',
				data : treeData,
				top : '5%',
				left : '30%',
				bottom : '5%',
				right : '15%',
				symbolSize : 20,
				label : {
					normal : {
						position : 'left',
						verticalAlign : 'middle',
						align : 'right'
					}
				},
				leaves : {
					label : {
						position : 'right',
						verticalAlign : 'middle',
						align : 'left'
					}
				},
				expandAndCollapse : true ,
				initialTreeDepth : 2  //展示层级数,默认是2
			} ]
		});
		//4.树绑定事件
		 myChart.on('click', function(params) {
			var name = params.data.name;//点击的节点的name
			var value = params.data.value;//点击的节点的value
			//调用点击事件
			clickNode(name,value);
		});
	}
	else if(id==3)
	{
		var  myChart = echarts.init(document.getElementById("container3"));//div元素节点的对象
		myChart.setOption({
			tooltip : {
				trigger : 'item',
				triggerOn : 'mousemove'
			},
			series : [ {
				type : 'tree',
				name : 'TREE_ECHARTS',
				data : treeData,
				top : '5%',
				left : '30%',
				bottom : '5%',
				right : '15%',
				symbolSize : 20,
				label : {
					normal : {
						position : 'left',
						verticalAlign : 'middle',
						align : 'right'
					}
				},
				leaves : {
					label : {
						position : 'right',
						verticalAlign : 'middle',
						align : 'left'
					}
				},
				expandAndCollapse : true ,
				initialTreeDepth : 2  //展示层级数,默认是2
			} ]
		});
		//4.树绑定事件
		 myChart.on('click', function(params) {
			var name = params.data.name;//点击的节点的name
			var value = params.data.value;//点击的节点的value
			//调用点击事件
			clickNode(name,value);
		});
	} 
}
//节点的点击事件
function clickNode(name,value){
	alert(name+'--的值：'+value);
}