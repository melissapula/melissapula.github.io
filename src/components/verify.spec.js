import {mount, createLocalVue} from '@vue/test-utils'
import verify from '../pages/verify'

test('mount a vue component', () => {
    const wrapper = mount(verify)
    console.log(wrapper)
})

describe('Verify.vue', () => {
    test('setup correctly', () => {
        expect(true).toBe(true)
    })
})

describe('verify', () => {
    it('has data', () => {
        expect(typeof verify.data).toBe('function')
    })
})

describe('Mounted Verify', () => {
    const wrapper = mount(verify);
    test('does a wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
    })
})

it('template contains markup', () => {
    const wrapper = mount(verify);
    expect(wrapper.html()).toContain('Calculate')
})

it('contains button', () => {
    const wrapper = mount(verify);
    expect(wrapper.find('mdb-btn').exists()).toBe(true)
})

it('renders correctly with different data', async () => {
    const wrapper = mount(verify);
    wrapper.setData({ firstNum: 5, secondNum: 10, operator: '+', result: 15 })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('5 + 10 = 15')
})

it('button click works', async () => {
    const wrapper = mount(verify);
    const button = wrapper.find('mdb-btn')
    await button.trigger('click')
})

it('adds correctly', () => {
    const wrapper = mount(verify);
    const localVue = createLocalVue()
    wrapper.setData({ localVue, firstNum: 10, secondNum: 2, operator: '+' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(12)
    wrapper.setData({ localVue, firstNum: 25, secondNum: 5, operator: '+' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(30)
})

it('subtracts correctly', () => {
    const wrapper = mount(verify);
    const localVue = createLocalVue()
    wrapper.setData({ localVue, firstNum: 13, secondNum: 4, operator: '-' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(9)
    wrapper.setData({ localVue, firstNum: 47, secondNum: 40, operator: '-' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(7)
})

it('multiplies correctly', () => {
    const wrapper = mount(verify);
    const localVue = createLocalVue()
    wrapper.setData({ localVue, firstNum: 5, secondNum: 7, operator: '*' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(35)
    wrapper.setData({ localVue, firstNum: 14, secondNum: 3, operator: '*' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(42)
})

it('divides correctly', () => {
    const wrapper = mount(verify);
    const localVue = createLocalVue()
    wrapper.setData({ localVue, firstNum: 15, secondNum: 3, operator: '/' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(5)
    wrapper.setData({ localVue, firstNum: 42, secondNum: 7, operator: '/' })
    wrapper.vm.calculate()
    expect(wrapper.vm.result).toBe(6)
})

