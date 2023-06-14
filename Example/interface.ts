interface IProsessor {
    brand: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
}

interface Intel extends IProsessor {
    turboBoost: boolean;
}

interface AMD extends IProsessor {
    precisionBoost: boolean;
}

function createIntel(processor: Intel):void {
    console.log(`
    berhasil membuat processor ${processor.brand}
    ============================
    dengan detail berikut:
    
    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSpeed}
    fitur turboBoost : ${processor.turboBoost}`)
}
function createAMD(processor: AMD):void {
    console.log(`
    berhasil membuat processor ${processor.brand}
    ============================
    dengan detail berikut:
    
    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSpeed}
    fitur precisionBoost : ${processor.precisionBoost}`)
}

const intelCoreI5 = {
    brand:"intel",
    baseModel:"core i5",
    modelName:"i5-11350F",
    clockSpeed: 4,
    turboBoost: false
}

const amdRyzen3 = {
    brand:"AMD",
    baseModel:"ryzen 3",
    modelName:"3200g",
    clockSpeed: 6,
    precisionBoost: true
}

createIntel(intelCoreI5)
createAMD(amdRyzen3)