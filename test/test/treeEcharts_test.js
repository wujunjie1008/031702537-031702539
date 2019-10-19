const assert = require('assert');

const data = require('../treeEcharts.js');

describe('单元测试开始', () => {

    describe('对于单棵树的输入数据处理', () => {
        it('应该生成的节点数为7', () => {
			var form = "导师：张三\n2017级本科生：暗杀计划的卡、啊实打实的\n2018级研究生：碍事的家伙、按计划上帝啊";
            assert.strictEqual(data(form), 7);
        });
		it('应该生成的节点数为1', () => {
			var form = "导师：张三";
		    assert.strictEqual(data(form), 1);
		});
		it('应该生成的节点数为5', () => {
			var form = "导师：李四\n2017级本科生：阿松大吉利\n2018级研究生：爱上贷记卡";
		    assert.strictEqual(data(form), 5);
		});
		it('应该生成的节点数为3', () => {
			var form = "导师：张三\n2017级本科生：阿松大吉利";
		    assert.strictEqual(data(form), 3);
		});
		it('应该生成的节点数为9', () => {
			var form = "导师：张三\n2017级本科生：阿松大吉利、暗杀计划的卡、啊实打实的\n2018级研究生：爱上贷记卡、碍事的家伙、按计划上帝啊";
		    assert.strictEqual(data(form), 9);
		});
		it('应该生成的节点数为11', () => {
			var form = "导师：张三\n2017级本科生：暗杀计划的卡、啊实打实的\n2018级研究生：碍事的家伙、按计划上帝啊\n2016级博士生：爱上你的卡卡简、阿什利的骄、啊收到了";
		    assert.strictEqual(data(form), 11);
		});
		it('应该生成的节点数为15', () => {
			var form = "导师：张三\n2017级本科生：暗杀计划的卡、啊实打实的\n2018级研究生：碍事的家伙、按计划上帝啊\n2016级博士生：爱上你的卡卡简、阿什利的骄、啊收到了\n2016级本科生：按时打卡看、按计划上课、阿达";
		    assert.strictEqual(data(form), 15);
		});
		it('应该生成的节点数为0', () => {
			var form = "";
		    assert.strictEqual(data(form), 0);
			
		});
		it('应该生成的节点数为13', () => {
			var form = "导师：张三\n2017级本科生：暗杀计划的卡、啊实打实的\n2018级研究生：碍事的家伙、按计划上帝啊\n2016级博士生：爱上你的卡卡简\n2016级本科生：按时打卡看、按计划上课、阿达";
		    assert.strictEqual(data(form), 13);
			
		});
		it('应该生成的节点数为0', () => {
			var form = "导师：张三\n2017级本科生：阿松大吉利、暗杀计划的卡、啊实打实的\n2018级研究生：爱上贷记卡、、按计划上帝啊";
		    assert.strictEqual(data(form), 0);
			
		});
		
    });
});