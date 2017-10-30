module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('cars', [
      { 
        brand: 'Shelby', 
        model: 'Cobra SuperSnake',
        year: '1966',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/pkdekb6bvqnmdy386yeb.jpg'
      },
      { 
        brand: 'Saleen', 
        model: 'S7 Twin Turbo',
        year: '2005-2009',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/k6ztogwxwjxfyhqekja6.jpg'
      },
      {
        brand: 'TVR', 
        model: 'Sagaris',
        year: '2005-2006',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/pgtjecgvmjjmn5licfsm.jpg'
      },
      {
        brand: 'Noble', 
        model: 'M600',
        year: '2010-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/eyvdwfcucqglhfe7xtl5.jpg'
      },
      {
        brand: 'Ascari', 
        model: 'A10',
        year: '2006-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/i6r8bqqjmwn0le4woomg.jpg'
      },
      {
        brand: 'Spyker', 
        model: 'C8',
        year: '2000-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/whncmm1wpb5xgmlscawi.jpg'
      },
      { 
        brand: 'Lancia', 
        model: 'Stratos',
        year: '1972-1974',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/glca5sohrtcc270y45mw.jpg'
      },
      {
        brand: 'Lamborghini', 
        model: 'Sesto Elemento',
        year: '2012',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/gxzbrxirnmjuvh9h5azk.jpg'
      },
      {
        brand: 'Lamborghini', 
        model: 'Countach',
        year: '1974-1990',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/vu92qoogpzeynzr6svua.jpg'
      },
      {
        brand: 'Porsche', 
        model: 'Carrera GT',
        year: '2004-2007',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/candtxciun3alhmigujv.jpg'
      },
      {
        brand: 'Nissan', 
        model: 'GT-R',
        year: '2007-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/dkynlowsrekacwhdx3x2.jpg'
      },
      {
        brand: 'Pagani', 
        model: 'Huayra',
        year: '2011-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/fhswzcss9i8mgfidy0iy.jpg'
      },
      {
        brand: 'Koenigsegg', 
        model: 'Agera R',
        year: '2011-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/ggqkgmukrc5texkojyco.jpg'
      },
      {
        brand: 'Ferrari', 
        model: 'Testarossa',
        year: '1984-1996',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/gknaumltnslij3bisnjt.jpg'
      },
      {
        brand: 'SSC', 
        model: 'Ultimate Aero XT',
        year: '2013',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/zhtswxjkvaexuiefiwb0.jpg'
      },
      {
        brand: 'BAC', 
        model: 'Mono',
        year: '2012-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/re6btwchtxpkbjay7z2l.jpg'
      },
      {
        brand: 'Gumpert', 
        model: 'Apollo Sport',
        year: '2005-Present',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/ksqqcoscc1akjbngaa3j.jpg'
      },
      {
        brand: 'Lexus', 
        model: 'LFA',
        year: '2010-2012',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/uodkhkeobaalbnd917h7.jpg'
      },
      {
        brand: 'McLaren', 
        model: 'MP4-12C/650S',
        year: '2011-2014',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/ydmtil91bhjtcbliwj5s.jpg'
      },
      {
        brand: 'Mercedes-Benz', 
        model: 'SLS AMG Black Series',
        year: '2013',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/xezf09ik7ysbdqcmch6z.jpg'
      },
      {
        brand: 'Porsche', 
        model: '918 Spyder',
        year: '2013',
        image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/f_auto,fl_lossy,pg_1,q_auto/c_limit,w_680/e8m4nc59zjue4xnwvwc2.jpg'
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {});
  }
};
