import SMACSS from '../src/smacss.es6.js';


describe('SMACSS Class', ()=>{
    let smacss;

    beforeEach(()=>{
        smacss = new SMACSS();
    });

    describe('scaffold', ()=>{
        it('should be true', ()=>{
            expect(true).toBe(true);
        });
    });
    

});