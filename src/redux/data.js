// 初始数据
export const tmpData = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

export const newProduct = {
  product: [
    {
      product: 'bread 700g',
      quantity: 20,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 100,
      unitCost: 47
    }
  ]
}

export const bookList = {
  "sciencist": [
    {
      name: '无底黑洞',
      author: '霍金',
      id:1
    },
  ],
  "acticle": [
    {
      name: "那些年一起追的女孩",
      author: '九把刀',
      id:1
    }
  ]

}

export const usersList = { 
	fetched: false, 
	users: [{
		key: '1',
		name: '张三',
		email: 'zhangsan@126.com'
    }],
    posts: [{
        key: '1',
        id: '1',
        title: 'test'
    }],
	error: null
};

export const errorInfo = {
  status: 200,
  msg: '目前没有失败的操作'
}