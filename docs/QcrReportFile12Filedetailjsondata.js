{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN822443.null",
      "_method" : "---dummymethode in line [00758]",
      "_target" : "java.io.ObjectInputStream.readNull@POLYN822443.return",
      "_risk" : "//QC-JAVCWZ099[00758] In java.io.ObjectInputStream.readNull@POLYN822443[00758] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN822443.return",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN822443 in line [00647]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_risk" : "//QC-JAVCWZ099[00647] In java.io.ObjectInputStream.readObject0@POLYN816930[00647] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN816930 in line [00161]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_risk" : "//QC-JAVCWZ099[00161] In java.io.ObjectInputStream.readObject@POLYN779418[00161] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_method" : "---dummymethode in line [00170]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.return",
      "_risk" : "//QC-JAVCWZ099[00170] In java.io.ObjectInputStream.readObject@POLYN779418[00170] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN822829.obj",
      "_method" : "---dummymethode in line [00785]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN822829.return",
      "_risk" : "//QC-JAVCWZ099[00785] In java.io.ObjectInputStream.readHandle@POLYN822829[00785] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN822829.return",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN822829 in line [00650]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_risk" : "//QC-JAVCWZ099[00650] In java.io.ObjectInputStream.readObject0@POLYN816930[00650] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN816930 in line [00161]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_risk" : "//QC-JAVCWZ099[00161] In java.io.ObjectInputStream.readObject@POLYN779418[00161] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_method" : "---dummymethode in line [00170]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.return",
      "_risk" : "//QC-JAVCWZ099[00170] In java.io.ObjectInputStream.readObject@POLYN779418[00170] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN824127.cl",
      "_method" : "---dummymethode in line [00803]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN824127.return",
      "_risk" : "//QC-JAVCWZ099[00803] In java.io.ObjectInputStream.readClass@POLYN824127[00803] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN824127.return",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN824127 in line [00653]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.ObjectInputStream.readObject0@POLYN816930[00653] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN816930 in line [00161]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_risk" : "//QC-JAVCWZ099[00161] In java.io.ObjectInputStream.readObject@POLYN779418[00161] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_method" : "---dummymethode in line [00170]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.return",
      "_risk" : "//QC-JAVCWZ099[00170] In java.io.ObjectInputStream.readObject@POLYN779418[00170] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN826657.desc",
      "_method" : "---dummymethode in line [00898]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN826657.return",
      "_risk" : "//QC-JAVCWZ099[00898] In java.io.ObjectInputStream.readProxyDesc@POLYN826657[00898] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN826657.return",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN826657 in line [00820]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.descriptor",
      "_risk" : "//QC-JAVCWZ099[00820] In java.io.ObjectInputStream.readClassDesc@POLYN825196[00820] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.descriptor",
      "_method" : "---dummymethode in line [00832]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.return",
      "_risk" : "//QC-JAVCWZ099[00832] In java.io.ObjectInputStream.readClassDesc@POLYN825196[00832] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN825196 in line [00657]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_risk" : "//QC-JAVCWZ099[00657] In java.io.ObjectInputStream.readObject0@POLYN816930[00657] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN816930 in line [00161]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_risk" : "//QC-JAVCWZ099[00161] In java.io.ObjectInputStream.readObject@POLYN779418[00161] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_method" : "---dummymethode in line [00170]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.return",
      "_risk" : "//QC-JAVCWZ099[00170] In java.io.ObjectInputStream.readObject@POLYN779418[00170] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN829487.desc",
      "_method" : "---dummymethode in line [00951]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN829487.return",
      "_risk" : "//QC-JAVCWZ099[00951] In java.io.ObjectInputStream.readNonProxyDesc@POLYN829487[00951] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN829487.return",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN829487 in line [00823]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.descriptor",
      "_risk" : "//QC-JAVCWZ099[00823] In java.io.ObjectInputStream.readClassDesc@POLYN825196[00823] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.descriptor",
      "_method" : "---dummymethode in line [00832]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.return",
      "_risk" : "//QC-JAVCWZ099[00832] In java.io.ObjectInputStream.readClassDesc@POLYN825196[00832] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN825196.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN825196 in line [00657]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_risk" : "//QC-JAVCWZ099[00657] In java.io.ObjectInputStream.readObject0@POLYN816930[00657] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN816930.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN816930 in line [00161]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_risk" : "//QC-JAVCWZ099[00161] In java.io.ObjectInputStream.readObject@POLYN779418[00161] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN779418.obj",
      "_method" : "---dummymethode in line [00170]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN779418.return",
      "_risk" : "//QC-JAVCWZ099[00170] In java.io.ObjectInputStream.readObject@POLYN779418[00170] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN586840.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00697]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_risk" : "//QC-JAVCWZ099[00697] In java.io.ObjectOutputStream.writeArray@POLYN586840[00697] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580 in line [00515]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_risk" : "//QC-JAVCWZ099[00515] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00515] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN595212 in line [00745]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_risk" : "//QC-JAVCWZ099[00745] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00745] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN597055 in line [00816]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN597055.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN552321.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN599463 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN599463.ex",
      "_risk" : "//QC-JAVCWZ099[00124] In java.io.ObjectOutputStream.writeObject@POLYN552321[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN599463.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00868]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_risk" : "//QC-JAVCWZ099[00868] In java.io.ObjectOutputStream.writeFatalException@POLYN599463[00868] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580 in line [00515]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_risk" : "//QC-JAVCWZ099[00515] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00515] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN595212 in line [00745]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_risk" : "//QC-JAVCWZ099[00745] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00745] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN597055 in line [00816]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN597055.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN554539.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN599463 in line [00140]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN599463.ex",
      "_risk" : "//QC-JAVCWZ099[00140] In java.io.ObjectOutputStream.writeUnshared@POLYN554539[00140] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN599463.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00868]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_risk" : "//QC-JAVCWZ099[00868] In java.io.ObjectOutputStream.writeFatalException@POLYN599463[00868] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580 in line [00515]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_risk" : "//QC-JAVCWZ099[00515] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00515] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN595212 in line [00745]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_risk" : "//QC-JAVCWZ099[00745] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00745] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN597055 in line [00816]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN597055.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN560590.obj",
      "_method" : "---dummymethode in line [00204]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN560590.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN560590.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN560590 in line [00481]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.rep",
      "_risk" : "//QC-JAVCWZ099[00481] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00481] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.rep",
      "_method" : "---dummymethode in line [00486]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_risk" : "//QC-JAVCWZ099[00486] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00486] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580 in line [00515]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_risk" : "//QC-JAVCWZ099[00515] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00515] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN595212 in line [00745]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_risk" : "//QC-JAVCWZ099[00745] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00745] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN597055 in line [00816]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN597055.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN234795.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN552321 in line [00265]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN552321.obj",
      "_risk" : "//QC-JAVCWZ099[00265] In java.lang.StringBuilder.writeObject@POLYN234795[00265] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN552321.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00121]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_risk" : "//QC-JAVCWZ099[00121] In java.io.ObjectOutputStream.writeObject@POLYN552321[00121] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580 in line [00515]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_risk" : "//QC-JAVCWZ099[00515] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00515] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN595212 in line [00745]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_risk" : "//QC-JAVCWZ099[00745] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00745] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN597055 in line [00816]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN597055.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN554539.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00137]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_risk" : "//QC-JAVCWZ099[00137] In java.io.ObjectOutputStream.writeUnshared@POLYN554539[00137] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580 in line [00515]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_risk" : "//QC-JAVCWZ099[00515] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00515] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN595212 in line [00745]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_risk" : "//QC-JAVCWZ099[00745] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00745] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN595212.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN597055 in line [00816]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN597055.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN365349.x",
      "_method" : "---java.io.PrintStream.print@POLYN360900 in line [00390]",
      "_target" : "java.io.PrintStream.print@POLYN360900.s",
      "_risk" : "//QC-JAVCWZ099[00390] In java.io.PrintStream.println@POLYN365349[00390] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN360900.s",
      "_method" : "---java.io.PrintStream.write@POLYN355709 in line [00315]",
      "_target" : "java.io.PrintStream.write@POLYN355709.s",
      "_risk" : "//QC-JAVCWZ099[00315] In java.io.PrintStream.print@POLYN360900[00315] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN346051.x",
      "_method" : "---java.io.PrintWriter.print@POLYN341339 in line [00307]",
      "_target" : "java.io.PrintWriter.print@POLYN341339.c",
      "_risk" : "//QC-JAVCWZ099[00307] In java.io.PrintWriter.println@POLYN346051[00307] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN341339.c",
      "_method" : "---java.io.PrintWriter.write@POLYN339810 in line [00248]",
      "_target" : "java.io.PrintWriter.write@POLYN339810.s",
      "_risk" : "//QC-JAVCWZ099[00248] In java.io.PrintWriter.print@POLYN341339[00248] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN156194.path",
      "_method" : "---java.io.PrintWriter.println@POLYN348829 in line [00081]",
      "_target" : "java.io.PrintWriter.println@POLYN348829.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.shell.FindCommandHandler.find@POLYN156194[00081] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN348829.x",
      "_method" : "---java.io.PrintWriter.print@POLYN344309 in line [00355]",
      "_target" : "java.io.PrintWriter.print@POLYN344309.s",
      "_risk" : "//QC-JAVCWE099[00355] In java.io.PrintWriter.println@POLYN348829[00355] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN344309.s",
      "_method" : "---java.io.PrintWriter.write@POLYN339810 in line [00281]",
      "_target" : "java.io.PrintWriter.write@POLYN339810.s",
      "_risk" : "//QC-JAVCWE099[00281] In java.io.PrintWriter.print@POLYN344309[00281] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN187252.\"\"",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188601 in line [00119]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188601.intro",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188601.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN348829 in line [00145]",
      "_target" : "java.io.PrintWriter.println@POLYN348829.x",
      "_risk" : "//QC-JAVCWE099[00145] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188601[00145] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN348829.x",
      "_method" : "---java.io.PrintWriter.print@POLYN344309 in line [00355]",
      "_target" : "java.io.PrintWriter.print@POLYN344309.s",
      "_risk" : "//QC-JAVCWE099[00355] In java.io.PrintWriter.println@POLYN348829[00355] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN344309.s",
      "_method" : "---java.io.PrintWriter.write@POLYN339810 in line [00281]",
      "_target" : "java.io.PrintWriter.write@POLYN339810.s",
      "_risk" : "//QC-JAVCWE099[00281] In java.io.PrintWriter.print@POLYN344309[00281] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN586840 in line [00511]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN586840.desc",
      "_risk" : "//QC-JAVCWZ099[00511] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00511] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN586840.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN582326 in line [00641]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN582326.desc",
      "_risk" : "//QC-JAVCWZ099[00641] In java.io.ObjectOutputStream.writeArray@POLYN586840[00641] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN582326.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN584817 in line [00560]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN584817.desc",
      "_risk" : "//QC-JAVCWZ099[00560] In java.io.ObjectOutputStream.writeClassDesc@POLYN582326[00560] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN584817.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN563060 in line [00606]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN563060.desc",
      "_risk" : "//QC-JAVCWZ099[00606] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN584817[00606] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.net.Socket.getImpl@POLYN470450.impl",
      "_method" : "---dummymethode in line [00200]",
      "_target" : "java.net.Socket.getImpl@POLYN470450.return",
      "_risk" : "//QC-JAVCWE099[00200] In java.net.Socket.getImpl@POLYN470450[00200] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN470450.return",
      "_method" : "---java.net.Socket.getImpl@POLYN470450 in line [00297]",
      "_target" : "java.net.Socket.getInetAddress@POLYN476318.return",
      "_risk" : "//QC-JAVCWE099[00297] In java.net.Socket.getInetAddress@POLYN476318[00297] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.getInetAddress@POLYN476318.return",
      "_method" : "---java.net.Socket.getInetAddress@POLYN476318 in line [00275]",
      "_target" : "org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN260108.return",
      "_risk" : "//QC-JAVCWE099[00275] In org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN260108[00275] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN586840.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN582326 in line [00641]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN582326.unshared",
      "_risk" : "//QC-JAVCWZ099[00641] In java.io.ObjectOutputStream.writeArray@POLYN586840[00641] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN582326.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN583315 in line [00558]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN583315.unshared",
      "_risk" : "//QC-JAVCWZ099[00558] In java.io.ObjectOutputStream.writeClassDesc@POLYN582326[00558] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN582326 in line [00740]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN582326.unshared",
      "_risk" : "//QC-JAVCWZ099[00740] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN592580[00740] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN582326.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN583315 in line [00558]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN583315.unshared",
      "_risk" : "//QC-JAVCWZ099[00558] In java.io.ObjectOutputStream.writeClassDesc@POLYN582326[00558] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN599463.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00868]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.unshared",
      "_risk" : "//QC-JAVCWZ099[00868] In java.io.ObjectOutputStream.writeFatalException@POLYN599463[00868] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN586840 in line [00511]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN586840.unshared",
      "_risk" : "//QC-JAVCWZ099[00511] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00511] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN552321.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00121]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.unshared",
      "_risk" : "//QC-JAVCWZ099[00121] In java.io.ObjectOutputStream.writeObject@POLYN552321[00121] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN586840 in line [00511]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN586840.unshared",
      "_risk" : "//QC-JAVCWZ099[00511] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00511] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN554539.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN576809 in line [00137]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.unshared",
      "_risk" : "//QC-JAVCWZ099[00137] In java.io.ObjectOutputStream.writeUnshared@POLYN554539[00137] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN576809.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN586840 in line [00511]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN586840.unshared",
      "_risk" : "//QC-JAVCWZ099[00511] In java.io.ObjectOutputStream.writeObject0@POLYN576809[00511] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153262.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN362182 in line [00052]",
      "_target" : "java.io.PrintStream.println@POLYN362182.x",
      "_risk" : "//QC-JAVCWE099[00052] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153262[00052] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN362182.x",
      "_method" : "---java.io.PrintStream.print@POLYN357394 in line [00334]",
      "_target" : "java.io.PrintStream.print@POLYN357394.b",
      "_risk" : "//QC-JAVCWE099[00334] In java.io.PrintStream.println@POLYN362182[00334] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162902.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN362182 in line [00066]",
      "_target" : "java.io.PrintStream.println@POLYN362182.x",
      "_risk" : "//QC-JAVCWE099[00066] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162902[00066] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN362182.x",
      "_method" : "---java.io.PrintStream.print@POLYN357394 in line [00334]",
      "_target" : "java.io.PrintStream.print@POLYN357394.b",
      "_risk" : "//QC-JAVCWE099[00334] In java.io.PrintStream.println@POLYN362182[00334] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311250.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN362182 in line [00908]",
      "_target" : "java.io.PrintStream.println@POLYN362182.x",
      "_risk" : "//QC-JAVCWE099[00908] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311250[00908] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN362182.x",
      "_method" : "---java.io.PrintStream.print@POLYN357394 in line [00334]",
      "_target" : "java.io.PrintStream.print@POLYN357394.b",
      "_risk" : "//QC-JAVCWE099[00334] In java.io.PrintStream.println@POLYN362182[00334] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN187390.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN362182 in line [00120]",
      "_target" : "java.io.PrintStream.println@POLYN362182.x",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN187390[00120] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN362182.x",
      "_method" : "---java.io.PrintStream.print@POLYN357394 in line [00334]",
      "_target" : "java.io.PrintStream.print@POLYN357394.b",
      "_risk" : "//QC-JAVCWE099[00334] In java.io.PrintStream.println@POLYN362182[00334] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN187390.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN362182 in line [00135]",
      "_target" : "java.io.PrintStream.println@POLYN362182.x",
      "_risk" : "//QC-JAVCWE099[00135] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN187390[00135] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN362182.x",
      "_method" : "---java.io.PrintStream.print@POLYN357394 in line [00334]",
      "_target" : "java.io.PrintStream.print@POLYN357394.b",
      "_risk" : "//QC-JAVCWE099[00334] In java.io.PrintStream.println@POLYN362182[00334] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN364891.x",
      "_method" : "---java.io.PrintStream.print@POLYN360436 in line [00382]",
      "_target" : "java.io.PrintStream.print@POLYN360436.s",
      "_risk" : "//QC-JAVCWZ099[00382] In java.io.PrintStream.println@POLYN364891[00382] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN360436.s",
      "_method" : "---java.io.PrintStream.write@POLYN354791 in line [00307]",
      "_target" : "java.io.PrintStream.write@POLYN354791.buf",
      "_risk" : "//QC-JAVCWZ099[00307] In java.io.PrintStream.print@POLYN360436[00307] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN348369.x",
      "_method" : "---java.io.PrintWriter.print@POLYN343845 in line [00347]",
      "_target" : "java.io.PrintWriter.print@POLYN343845.s",
      "_risk" : "//QC-JAVCWZ099[00347] In java.io.PrintWriter.println@POLYN348369[00347] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN343845.s",
      "_method" : "---java.io.PrintWriter.write@POLYN338818 in line [00273]",
      "_target" : "java.io.PrintWriter.write@POLYN338818.buf",
      "_risk" : "//QC-JAVCWZ099[00273] In java.io.PrintWriter.print@POLYN343845[00273] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144291.message",
      "_method" : "---java.io.PrintWriter.println@POLYN345597 in line [00021]",
      "_target" : "java.io.PrintWriter.println@POLYN345597.x",
      "_risk" : "//QC-JAVCWE099[00021] In org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144291[00021] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN345597.x",
      "_method" : "---java.io.PrintWriter.print@POLYN340842 in line [00299]",
      "_target" : "java.io.PrintWriter.print@POLYN340842.b",
      "_risk" : "//QC-JAVCWE099[00299] In java.io.PrintWriter.println@POLYN345597[00299] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.Socket@POLYN467193.address",
      "_method" : "---java.net.Socket.connect@POLYN470968 in line [00131]",
      "_target" : "java.net.Socket.connect@POLYN470968.endpoint",
      "_risk" : "//QC-JAVCWZ099[00131] In java.net.Socket.Socket@POLYN467193[00131] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN470968.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN471618 in line [00205]",
      "_target" : "java.net.Socket.connect@POLYN471618.endpoint",
      "_risk" : "//QC-JAVCWZ099[00205] In java.net.Socket.connect@POLYN470968[00205] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN273422.connector"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274730.id"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.prefix"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.id"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.metrics"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.nowMs"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453.key"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453.value"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.requestVersion"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.response"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.isPartialUpdate"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.nowMs"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.connName"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.config"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.allowReplace"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.callback"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.configInfos"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190135.newCacheSizeBytes"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606.initialTopologies"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477.isDisconnected"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477.cause"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522.request"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522.cb"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334279.partition"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334279.offsetResetStrategy"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787.tp"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787.position"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN329364.tp"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN294568.sensor"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339.dq"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197711.entries"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740.batch"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740.exception"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740.adjustSequenceNumbers"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384145.exception"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374145.exception"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381566.batch"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377378.tp"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212.connName"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212.callback"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN419098.reason"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN419098.shouldResetMemberId"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN418399.reason"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN418399.shouldResetMemberId"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421.deque"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN154658.compressionRatioForTopic"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396.api"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396.error"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396.shouldResetMemberId"
  }, {
    "_id" : "R49",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218909.b"
  }, {
    "_id" : "R50",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218909.off"
  }, {
    "_id" : "R51",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218909.len"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378.tp"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378.position"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378.requestedResetStrategy"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN334517.partitionDequeue"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN156606.compressionRatioForTopic"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416322.cause"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383593.batch"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383593.response"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160012.status"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159633.status"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN313180.pattern"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN313180.listener"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN324759.tp"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN324759.position"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN331669.tp"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN331669.highWatermark"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN331859.tp"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN331859.logStartOffset"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332049.tp"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332049.lastStableOffset"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489.tp"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489.preferredReadReplicaId"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489.timeMs"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474.partitions"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474.offsetResetStrategy"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038.partitions"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038.nextAllowResetTimeMs"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339116.tp"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN339267.tp"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413.partitions"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413.nextRetryTimeMs"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101.topic"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101.nowMs"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163142.lastVersion"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163142.timeoutMs"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN163914.requestVersion"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN163914.response"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN163914.isPartialUpdate"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN163914.nowMs"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371822.topicPartition"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379749.topicPartition"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379749.increment"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168555.connector"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168555.configs"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160700.status"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160157.status"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166437.newLeader"
  }, {
    "_id" : "R99",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159676.b"
  }, {
    "_id" : "R100",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159676.off"
  }, {
    "_id" : "R101",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159676.len"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224.consumerRecords"
  }, {
    "_id" : "R103",
    "_libelle" : "java.io.PipedReader.receive@POLYN201247.c"
  }, {
    "_id" : "R104",
    "_libelle" : "java.io.PipedReader.receive@POLYN201247.off"
  }, {
    "_id" : "R105",
    "_libelle" : "java.io.PipedReader.receive@POLYN201247.len"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133", "S0:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R2 in line [00045],R3 in line [00045],R4 in line [00045],R5 in line [00045])", "S0:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133", "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R2 in line [00045],R3 in line [00045],R4 in line [00045],R5 in line [00045])", "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R2 in line [00045],R3 in line [00045],R4 in line [00045],R5 in line [00045])", "S1:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825", "S2:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S2:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R6 in line [00142],R7 in line [00142])", "S2:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825", "S3:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S3:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R6 in line [00142],R7 in line [00142])", "S3:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R6 in line [00142],R7 in line [00142])", "S3:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.clients.Metadata.update@POLYN251599 (R8 in line [00184],R9 in line [00184],R10 in line [00184],R11 in line [00184])", "S4:org.apache.kafka.common.ClusterResource.clusterId@POLYN146889" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.clients.Metadata.update@POLYN251599 (R8 in line [00184],R9 in line [00184],R10 in line [00184],R11 in line [00184])", "S5:org.apache.kafka.clients.Metadata.update@POLYN251599 (R8 in line [00184],R9 in line [00184],R10 in line [00184],R11 in line [00184])", "S5:org.apache.kafka.common.ClusterResource.clusterId@POLYN146889" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R12 in line [00184],R13 in line [00184],R14 in line [00184],R15 in line [00184],R16 in line [00184])", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R12 in line [00184],R13 in line [00184],R14 in line [00184],R15 in line [00184],R16 in line [00184])", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238801", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238801", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.recomputeTaskConfigs@POLYN236020" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181", "S7:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201", "S7:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234", "S7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN415668", "S7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477 (R19 in line [00801],R20 in line [00801])", "S7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477 (R19 in line [00801],R20 in line [00801])", "S7:org.apache.kafka.common.utils.Time.milliseconds" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522 (R21 in line [00292],R22 in line [00292])", "S8:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161130" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522 (R21 in line [00292],R22 in line [00292])", "S9:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522 (R21 in line [00292],R22 in line [00292])", "S9:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161130" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787 (R25 in line [00300],R26 in line [00300])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787 (R25 in line [00300],R26 in line [00300])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212 (R38 in line [00144],R39 in line [00144])", "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238321" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212 (R38 in line [00144],R39 in line [00144])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212 (R38 in line [00144],R39 in line [00144])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238321" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378 (R52 in line [00312],R53 in line [00312],R54 in line [00312])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378 (R52 in line [00312],R53 in line [00312],R54 in line [00312])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378 (R52 in line [00312],R53 in line [00312],R54 in line [00312])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489 (R72 in line [00493],R73 in line [00493],R74 in line [00493])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489 (R72 in line [00493],R73 in line [00493],R74 in line [00493])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474 (R75 in line [00526],R76 in line [00526])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474 (R75 in line [00526],R76 in line [00526])", "S16:java.io.InputStream.reset@POLYN251234" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038 (R77 in line [00537],R78 in line [00537])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038 (R77 in line [00537],R78 in line [00537])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413 (R81 in line [00631],R82 in line [00631])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413 (R81 in line [00631],R82 in line [00631])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413 (R81 in line [00631],R82 in line [00631])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101 (R83 in line [00052],R84 in line [00052])", "S20:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101 (R83 in line [00052],R84 in line [00052])", "S20:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN246286" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}