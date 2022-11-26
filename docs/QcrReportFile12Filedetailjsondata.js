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
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN796584.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN796584 in line [01967]",
      "_target" : "n",
      "_risk" : "//QC-JAVCWE099[01967] In java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN884065[01967] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "n",
      "_method" : "---dummymethode in line [01971]",
      "_target" : "java.io.ObjectInputStream.read@POLYN797118.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.read@POLYN797118.off",
      "_method" : "---dummymethode in line [01946]",
      "_target" : "java.io.ObjectInputStream.read@POLYN797118.return",
      "_risk" : "//QC-JAVCWE099[01946] In java.io.ObjectInputStream.BlockDataInputStream.read@POLYN881850[01946] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.read@POLYN797118.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN797118 in line [01851]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN877856.cibledummy",
      "_risk" : "//QC-JAVCWE099[01851] In java.io.ObjectInputStream.BlockDataInputStream.read@POLYN877856[01851] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "factory==null",
      "_method" : "---dummymethode in line [00054]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00054] In java.net.Socket.Socket@POLYN455415[00054] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "5",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00205]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN315282.si",
      "_risk" : "//QC-JAVCWE099[00205] In java.net.ServerSocket.implAccept@POLYN315282[00205] source or target data Sockettainted (java.net.ServerSocket)"
    }, {
      "_id" : "4",
      "_source" : "java.net.ServerSocket.implAccept@POLYN315282.si",
      "_method" : "---dummymethode in line [00219]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00219] In java.net.ServerSocket.implAccept@POLYN315282[00219] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "3",
      "_source" : "java.net.Socket.impl",
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
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.net.Socket.Socket@POLYN457064.impl",
      "_method" : "---dummymethode in line [00066]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00066] In java.net.Socket.Socket@POLYN457064[00066] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "5",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00205]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN315282.si",
      "_risk" : "//QC-JAVCWE099[00205] In java.net.ServerSocket.implAccept@POLYN315282[00205] source or target data Sockettainted (java.net.ServerSocket)"
    }, {
      "_id" : "4",
      "_source" : "java.net.ServerSocket.implAccept@POLYN315282.si",
      "_method" : "---dummymethode in line [00219]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00219] In java.net.ServerSocket.implAccept@POLYN315282[00219] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "3",
      "_source" : "java.net.Socket.impl",
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
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "factory!=null",
      "_method" : "---dummymethode in line [00183]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00183] In java.net.Socket.setImpl@POLYN469808[00183] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "5",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00205]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN315282.si",
      "_risk" : "//QC-JAVCWE099[00205] In java.net.ServerSocket.implAccept@POLYN315282[00205] source or target data Sockettainted (java.net.ServerSocket)"
    }, {
      "_id" : "4",
      "_source" : "java.net.ServerSocket.implAccept@POLYN315282.si",
      "_method" : "---dummymethode in line [00219]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00219] In java.net.ServerSocket.implAccept@POLYN315282[00219] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "3",
      "_source" : "java.net.Socket.impl",
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
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN243934.0",
      "_method" : "---dummymethode in line [00028]",
      "_target" : "java.io.InputStream.read@POLYN243934.return",
      "_risk" : "//QC-JAVCWE099[00028] In java.io.InputStream.read@POLYN243934[00028] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN243934.return",
      "_method" : "---java.io.InputStream.read@POLYN243934 in line [00768]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.bytesRead",
      "_risk" : "//QC-JAVCWE099[00768] In org.apache.kafka.common.utils.Utils.readFully@POLYN452227[00768] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.bytesRead",
      "_method" : "---dummymethode in line [00769]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN243934 in line [00768]",
      "_target" : "java.io.InputStream.read@POLYN243934.off",
      "_risk" : "//QC-JAVCWE099[00768] In org.apache.kafka.common.utils.Utils.readFully@POLYN452227[00768] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN243934.-1",
      "_method" : "---dummymethode in line [00033]",
      "_target" : "java.io.InputStream.read@POLYN243934.return",
      "_risk" : "//QC-JAVCWE099[00033] In java.io.InputStream.read@POLYN243934[00033] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN243934.return",
      "_method" : "---java.io.InputStream.read@POLYN243934 in line [00768]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.bytesRead",
      "_risk" : "//QC-JAVCWE099[00768] In org.apache.kafka.common.utils.Utils.readFully@POLYN452227[00768] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.bytesRead",
      "_method" : "---dummymethode in line [00769]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN243934 in line [00768]",
      "_target" : "java.io.InputStream.read@POLYN243934.off",
      "_risk" : "//QC-JAVCWE099[00768] In org.apache.kafka.common.utils.Utils.readFully@POLYN452227[00768] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "1",
      "_method" : "---dummymethode in line [00037]",
      "_target" : "java.io.InputStream.read@POLYN243934.i",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN243934.i",
      "_method" : "---dummymethode in line [00048]",
      "_target" : "java.io.InputStream.read@POLYN243934.return",
      "_risk" : "//QC-JAVCWE099[00048] In java.io.InputStream.read@POLYN243934[00048] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN243934.return",
      "_method" : "---java.io.InputStream.read@POLYN243934 in line [00768]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.bytesRead",
      "_risk" : "//QC-JAVCWE099[00768] In org.apache.kafka.common.utils.Utils.readFully@POLYN452227[00768] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.bytesRead",
      "_method" : "---dummymethode in line [00769]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN452227.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN243934 in line [00768]",
      "_target" : "java.io.InputStream.read@POLYN243934.off",
      "_risk" : "//QC-JAVCWE099[00768] In org.apache.kafka.common.utils.Utils.readFully@POLYN452227[00768] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "s==null",
      "_method" : "---dummymethode in line [00312]",
      "_target" : "java.io.PrintStream.print@POLYN360900.s",
      "_risk" : "//QC-JAVCWE099[00312] In java.io.PrintStream.print@POLYN360900[00312] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN360900.s",
      "_method" : "---java.io.PrintStream.write@POLYN355709 in line [00315]",
      "_target" : "java.io.PrintStream.write@POLYN355709.s",
      "_risk" : "//QC-JAVCWE099[00315] In java.io.PrintStream.print@POLYN360900[00315] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN355709.s",
      "_method" : "---java.io.Writer.write@POLYN189772 in line [00239]",
      "_target" : "java.io.Writer.write@POLYN189772.str",
      "_risk" : "//QC-JAVCWE099[00239] In java.io.PrintStream.write@POLYN355709[00239] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "\"null\"",
      "_method" : "---dummymethode in line [00313]",
      "_target" : "java.io.PrintStream.print@POLYN360900.s",
      "_risk" : "//QC-JAVCWE099[00313] In java.io.PrintStream.print@POLYN360900[00313] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN360900.s",
      "_method" : "---java.io.PrintStream.write@POLYN355709 in line [00315]",
      "_target" : "java.io.PrintStream.write@POLYN355709.s",
      "_risk" : "//QC-JAVCWE099[00315] In java.io.PrintStream.print@POLYN360900[00315] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN355709.s",
      "_method" : "---java.io.Writer.write@POLYN189772 in line [00239]",
      "_target" : "java.io.Writer.write@POLYN189772.str",
      "_risk" : "//QC-JAVCWE099[00239] In java.io.PrintStream.write@POLYN355709[00239] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153262.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN365349 in line [00052]",
      "_target" : "java.io.PrintStream.println@POLYN365349.x",
      "_risk" : "//QC-JAVCWE099[00052] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153262[00052] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN365349.x",
      "_method" : "---java.io.PrintStream.print@POLYN360900 in line [00390]",
      "_target" : "java.io.PrintStream.print@POLYN360900.s",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PrintStream.println@POLYN365349[00390] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN360900.s",
      "_method" : "---java.io.PrintStream.write@POLYN355709 in line [00315]",
      "_target" : "java.io.PrintStream.write@POLYN355709.s",
      "_risk" : "//QC-JAVCWE099[00315] In java.io.PrintStream.print@POLYN360900[00315] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN355709.s",
      "_method" : "---java.io.Writer.write@POLYN189772 in line [00239]",
      "_target" : "java.io.Writer.write@POLYN189772.str",
      "_risk" : "//QC-JAVCWE099[00239] In java.io.PrintStream.write@POLYN355709[00239] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162902.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN365349 in line [00066]",
      "_target" : "java.io.PrintStream.println@POLYN365349.x",
      "_risk" : "//QC-JAVCWE099[00066] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162902[00066] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN365349.x",
      "_method" : "---java.io.PrintStream.print@POLYN360900 in line [00390]",
      "_target" : "java.io.PrintStream.print@POLYN360900.s",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PrintStream.println@POLYN365349[00390] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN360900.s",
      "_method" : "---java.io.PrintStream.write@POLYN355709 in line [00315]",
      "_target" : "java.io.PrintStream.write@POLYN355709.s",
      "_risk" : "//QC-JAVCWE099[00315] In java.io.PrintStream.print@POLYN360900[00315] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN355709.s",
      "_method" : "---java.io.Writer.write@POLYN189772 in line [00239]",
      "_target" : "java.io.Writer.write@POLYN189772.str",
      "_risk" : "//QC-JAVCWE099[00239] In java.io.PrintStream.write@POLYN355709[00239] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN365870.s",
      "_method" : "---java.io.PrintStream.print@POLYN360900 in line [00399]",
      "_target" : "java.io.PrintStream.print@POLYN360900.s",
      "_risk" : "//QC-JAVCWZ099[00399] In java.io.PrintStream.println@POLYN365870[00399] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN360900.s",
      "_method" : "---java.io.PrintStream.write@POLYN355709 in line [00315]",
      "_target" : "java.io.PrintStream.write@POLYN355709.s",
      "_risk" : "//QC-JAVCWZ099[00315] In java.io.PrintStream.print@POLYN360900[00315] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN355709.s",
      "_method" : "---java.io.Writer.write@POLYN189772 in line [00239]",
      "_target" : "java.io.Writer.write@POLYN189772.str",
      "_risk" : "//QC-JAVCWZ099[00239] In java.io.PrintStream.write@POLYN355709[00239] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
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
    "_id" : "25",
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
    "_id" : "26",
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
    "_id" : "27",
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
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN349352.s",
      "_method" : "---java.io.PrintWriter.print@POLYN344309 in line [00364]",
      "_target" : "java.io.PrintWriter.print@POLYN344309.s",
      "_risk" : "//QC-JAVCWZ099[00364] In java.io.PrintWriter.println@POLYN349352[00364] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN344309.s",
      "_method" : "---java.io.PrintWriter.write@POLYN339810 in line [00281]",
      "_target" : "java.io.PrintWriter.write@POLYN339810.s",
      "_risk" : "//QC-JAVCWZ099[00281] In java.io.PrintWriter.print@POLYN344309[00281] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN182543.return",
      "_method" : "---java.io.Reader.read@POLYN182543 in line [00126]",
      "_target" : "java.io.BufferedReader.read1@POLYN231733.return",
      "_risk" : "//QC-JAVCWZ099[00126] In java.io.BufferedReader.read1@POLYN231733[00126] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN231733.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN231733 in line [00158]",
      "_target" : "java.io.BufferedReader.read@POLYN234939.n",
      "_risk" : "//QC-JAVCWZ099[00158] In java.io.BufferedReader.read@POLYN234939[00158] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read@POLYN234939.n",
      "_method" : "---dummymethode in line [00159]",
      "_target" : "java.io.BufferedReader.read@POLYN234939.return",
      "_risk" : "//QC-JAVCWZ099[00159] In java.io.BufferedReader.read@POLYN234939[00159] source data PATHtainted (java.io.BufferedReader.read)"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN803597.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN803597 in line [00960]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN831758.str",
      "_risk" : "//QC-JAVCWZ099[00960] In java.io.ObjectInputStream.readString@POLYN831758[00960] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN831758.str",
      "_method" : "---dummymethode in line [00973]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN831758.return",
      "_risk" : "//QC-JAVCWZ099[00973] In java.io.ObjectInputStream.readString@POLYN831758[00973] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN831758.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN831758 in line [01054]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN837067.name",
      "_risk" : "//QC-JAVCWZ099[01054] In java.io.ObjectInputStream.readEnum@POLYN837067[01054] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN364891.x",
      "_method" : "---java.io.PrintStream.print@POLYN360436 in line [00382]",
      "_target" : "java.io.PrintStream.print@POLYN360436.s",
      "_risk" : "//QC-JAVCWZ099[00382] In java.io.PrintStream.println@POLYN364891[00382] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN360436.s",
      "_method" : "---java.io.PrintStream.write@POLYN354791 in line [00307]",
      "_target" : "java.io.PrintStream.write@POLYN354791.buf",
      "_risk" : "//QC-JAVCWZ099[00307] In java.io.PrintStream.print@POLYN360436[00307] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN354791.buf",
      "_method" : "---java.io.Writer.write@POLYN189107 in line [00217]",
      "_target" : "java.io.Writer.write@POLYN189107.cbuf",
      "_risk" : "//QC-JAVCWZ099[00217] In java.io.PrintStream.write@POLYN354791[00217] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.OutputStreamWriter.write@POLYN176783.len",
      "_method" : "---java.io.Writer.write@POLYN190365 in line [00074]",
      "_target" : "java.io.Writer.write@POLYN190365.len",
      "_risk" : "//QC-JAVCWZ099[00074] In java.io.OutputStreamWriter.write@POLYN176783[00074] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN190365.len",
      "_method" : "---java.io.Writer.write@POLYN189531 in line [00069]",
      "_target" : "java.io.Writer.write@POLYN189531.len",
      "_risk" : "//QC-JAVCWZ099[00069] In java.io.Writer.write@POLYN190365[00069] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN339132.len",
      "_method" : "---java.io.Writer.write@POLYN190365 in line [00206]",
      "_target" : "java.io.Writer.write@POLYN190365.len",
      "_risk" : "//QC-JAVCWZ099[00206] In java.io.PrintWriter.write@POLYN339132[00206] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN190365.len",
      "_method" : "---java.io.Writer.write@POLYN189531 in line [00069]",
      "_target" : "java.io.Writer.write@POLYN189531.len",
      "_risk" : "//QC-JAVCWZ099[00069] In java.io.Writer.write@POLYN190365[00069] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
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
    "_id" : "35",
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
    "_id" : "36",
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
    "_id" : "37",
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
    "_id" : "38",
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
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.append@POLYN357483.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN337520 in line [00421]",
      "_target" : "java.io.PrintWriter.write@POLYN337520.c",
      "_risk" : "//QC-JAVCWZ099[00421] In java.io.PrintWriter.append@POLYN357483[00421] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN337520.c",
      "_method" : "---java.io.Writer.write@POLYN188472 in line [00169]",
      "_target" : "java.io.Writer.write@POLYN188472.c",
      "_risk" : "//QC-JAVCWZ099[00169] In java.io.PrintWriter.write@POLYN337520[00169] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "40",
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
    "_id" : "41",
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
    "_id" : "42",
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
    "_id" : "43",
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
    "_id" : "44",
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
    "_id" : "45",
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
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453.key"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453.value"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255445.taskId"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R10",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.this"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258450.cleanupDelayMs"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374145.exception"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377378.tp"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN356900.dq"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393127.e"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952.deque"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101.topic"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101.nowMs"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421.deque"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375641.topicPartition"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379749.topicPartition"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379749.increment"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN154658.compressionRatioForTopic"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740.batch"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740.exception"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740.adjustSequenceNumbers"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384145.exception"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381566.batch"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN201393.consumedMessage"
  }, {
    "_id" : "R43",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R44",
    "_libelle" : "java.io.InputStream.mark@POLYN249436.readlimit"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606.initialTopologies"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R48",
    "_libelle" : "java.io.Reader.lock"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477.isDisconnected"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477.cause"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416123.error"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.connName"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.config"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.allowReplace"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.callback"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193.configInfos"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228071.connName"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522.request"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522.cb"
  }, {
    "_id" : "R63",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R64",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN492341.size"
  }, {
    "_id" : "R65",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN495044.size"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN273422.connector"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274730.id"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN250633.addresses"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.prefix"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.id"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.metrics"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.nowMs"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN201164.preTransformRecord"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN419098.reason"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN419098.shouldResetMemberId"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN418399.reason"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN418399.shouldResetMemberId"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN389395.now"
  }, {
    "_id" : "R82",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R83",
    "_libelle" : "java.io.File.readObject@POLYN630646.s"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339.dq"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212.connName"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212.callback"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN357522.dq"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN392949.request"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190135.newCacheSizeBytes"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251025.response"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251025.isPartialUpdate"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251025.nowMs"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.requestVersion"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.response"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.isPartialUpdate"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN251599.nowMs"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN317323.assignments"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN229906.taskId"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN229906.cb"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197711.entries"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383593.batch"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383593.response"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334279.partition"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334279.offsetResetStrategy"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787.tp"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787.position"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN329364.tp"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231319.connName"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231319.cb"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R123",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN334517.partitionDequeue"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN156606.compressionRatioForTopic"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R127",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199066.namespace"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396.api"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396.error"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396.shouldResetMemberId"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416322.cause"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R135",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN318970.timeout"
  }, {
    "_id" : "R136",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN325249.size"
  }, {
    "_id" : "R137",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN490566.timeout"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN294568.sensor"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256310.key"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256310.value"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378.tp"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378.position"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378.requestedResetStrategy"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN182688.entries"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173653.key"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173653.value"
  }, {
    "_id" : "R153",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R154",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN217802.b"
  }, {
    "_id" : "R155",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218909.b"
  }, {
    "_id" : "R156",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218909.off"
  }, {
    "_id" : "R157",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218909.len"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN300855.reporter"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160012.status"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159633.status"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604.key"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604.value"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN159120.force"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker.this"
  }, {
    "_id" : "R168",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R169",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R170",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R171",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN169605.snk"
  }, {
    "_id" : "R172",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R173",
    "_libelle" : "java.io.PipedWriter.connect@POLYN168829.snk"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN200911.reporters"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN154097.committedOffsets"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN150702.topics"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN313180.pattern"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN313180.listener"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN324759.tp"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN324759.position"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN330931.tp"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN331669.tp"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN331669.highWatermark"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN331859.tp"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN331859.logStartOffset"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332049.tp"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332049.lastStableOffset"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489.tp"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489.preferredReadReplicaId"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489.timeMs"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474.partitions"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474.offsetResetStrategy"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038.partitions"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038.nextAllowResetTimeMs"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339116.tp"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN339267.tp"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413.partitions"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413.nextRetryTimeMs"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163142.lastVersion"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163142.timeoutMs"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371822.topicPartition"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN166937.connector"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN166937.properties"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN167907.connector"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168555.connector"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168555.configs"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169440.connector"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169440.state"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160700.status"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160157.status"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN169273.aclMutator"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN173040.configs"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166437.newLeader"
  }, {
    "_id" : "R222",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R223",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN158815.b"
  }, {
    "_id" : "R224",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159676.b"
  }, {
    "_id" : "R225",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159676.off"
  }, {
    "_id" : "R226",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159676.len"
  }, {
    "_id" : "R227",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN236060.builder"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235678.key"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235678.value"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235678.windowStartTimestamp"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258907.key"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258907.value"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258907.windowStartTimestamp"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.trogdor.workload.RandomComponentPayloadGenerator.random"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224.consumerRecords"
  }, {
    "_id" : "R242",
    "_libelle" : "java.io.PipedReader.receive@POLYN201247.c"
  }, {
    "_id" : "R243",
    "_libelle" : "java.io.PipedReader.receive@POLYN201247.off"
  }, {
    "_id" : "R244",
    "_libelle" : "java.io.PipedReader.receive@POLYN201247.len"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN263261.now"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN178610.partition"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN178610.offset"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN200282.errorHandlingMetrics"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN170265.listener"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.common.metrics.Metrics.ExpireSensorTask.run@POLYN302727", "S0:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN294568 (R140 in line [00262],R1 in line [00263])", "S0:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN294568 (R140 in line [00262],R1 in line [00263])", "S0:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN299717 (R1 in line [00323])", "S0:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN300855 (R1 in line [00345],R158 in line [00345])", "S1:org.apache.kafka.common.metrics.JmxReporter.close@POLYN198111 (R159 in line [00183])", "S1:org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN198352" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S2:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S2:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S2:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S2:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN385499", "S2:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateTasksForMaps@POLYN382470", "S2:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S2:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S2:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S3:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S3:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S3:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S3:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN385499", "S3:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateTasksForMaps@POLYN382470", "S3:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S3:org.apache.kafka.streams.state.internals.ThreadCache.maybeEvict@POLYN199359", "S3:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196770 (R3 in line [00220])", "S3:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191106", "S3:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191106", "S3:org.apache.kafka.common.metrics.Sensor.add@POLYN216934 (R0 in line [00259])", "S3:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN301261 (R1 in line [00352])", "S3:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150232" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197711 (R3 in line [00241],R105 in line [00241])", "S4:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S4:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199066 (R2 in line [00225],R128 in line [00225])", "S5:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202054 (R3 in line [00330])", "S5:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202054 (R3 in line [00330])", "S5:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN296955 (R129 in line [00447])", "S5:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN297606" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.examples.wordcount.WordCountDemo.main@POLYN162068", "S6:org.apache.kafka.streams.examples.wordcount.WordCountDemo.getStreamsConfig@POLYN159794", "S6:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194061", "S6:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200228 (R2 in line [00256])", "S6:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S6:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S6:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190135 (R2 in line [00057],R89 in line [00057])", "S7:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190135 (R2 in line [00057],R89 in line [00057])", "S7:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196770 (R3 in line [00220])", "S7:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN195704" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S8:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S8:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S8:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S8:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN385499", "S8:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateTasksForMaps@POLYN382470", "S8:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S8:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S8:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S8:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S9:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315354", "S9:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S9:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN372386", "S9:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN385499", "S9:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateTasksForMaps@POLYN382470", "S9:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S9:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S9:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S9:org.apache.kafka.common.metrics.Sensor.add@POLYN216934 (R0 in line [00259])", "S9:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN301261 (R1 in line [00352])", "S9:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150232" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157021", "S10:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157021", "S10:org.apache.kafka.streams.processor.internals.TaskManager.handleRebalanceComplete@POLYN341750", "S10:org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedUnassignedTaskDirectories@POLYN369473", "S10:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255445 (R6 in line [00001],R7 in line [00001])", "S10:org.apache.kafka.common.header.Headers.remove" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S11:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S11:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S11:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558024", "S11:org.apache.kafka.streams.KafkaStreams.start@POLYN551115 (R12 in line [01020])", "S11:org.apache.kafka.streams.KafkaStreams.start@POLYN551115 (R12 in line [01020])", "S11:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258450 (R6 in line [00001],R15 in line [00001])", "S11:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258745", "S11:org.apache.kafka.common.utils.Utils.delete@POLYN441817" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254240 (R6 in line [00001])", "S12:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249300 (R121 in line [00001])", "S12:java.io.File.File@POLYN573242", "S12:java.io.File.getPath@POLYN577696" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157021", "S13:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157021", "S13:org.apache.kafka.streams.processor.internals.TaskManager.handleRebalanceComplete@POLYN341750", "S13:org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedUnassignedTaskDirectories@POLYN369473", "S13:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255445 (R6 in line [00001],R7 in line [00001])", "S13:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255445 (R6 in line [00001],R7 in line [00001])", "S13:org.apache.kafka.common.header.Headers.remove" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S14:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S14:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S14:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S14:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546602 (R17 in line [00947])", "S14:org.apache.kafka.common.header.Headers.remove" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S15:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S15:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S15:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S15:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN534216", "S15:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN337476", "S15:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340", "S15:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.createTaskSensor@POLYN191981", "S15:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountSensor@POLYN200225", "S15:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286342 (R11 in line [00242])", "S15:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286798" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S16:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S16:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S16:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S16:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN534216", "S16:org.apache.kafka.common.metrics.Sensor.add@POLYN216934 (R0 in line [00259])", "S16:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN301261 (R1 in line [00352])", "S16:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150232" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S17:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S17:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S17:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S17:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S17:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546602 (R17 in line [00947])", "S17:org.apache.kafka.common.header.Headers.remove" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S18:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S18:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S18:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S18:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537013 (R16 in line [00804],R13 in line [00816])", "S18:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN372418", "S18:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN372418", "S18:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN332565 (R8 in line [00117])", "S18:state==State.PENDING_SHUTDOWN__newState!=State.DEAD" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514957", "S19:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S19:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513120", "S19:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558024", "S19:org.apache.kafka.streams.KafkaStreams.start@POLYN551115 (R12 in line [01020])", "S19:org.apache.kafka.streams.KafkaStreams.start@POLYN551115 (R12 in line [01020])", "S19:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258450 (R6 in line [00001],R15 in line [00001])", "S19:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258745", "S19:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258745", "S19:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255445 (R6 in line [00001],R7 in line [00001])", "S19:org.apache.kafka.common.header.Headers.remove" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539221", "S20:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540297 (R16 in line [00852])", "S20:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN372418", "S20:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN372418", "S20:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN332565 (R8 in line [00117])", "S20:state==State.PENDING_SHUTDOWN__newState!=State.DEAD" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539221", "S21:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540297 (R16 in line [00852])", "S21:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN372418", "S21:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN372418", "S21:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN372778", "S21:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN372778", "S21:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN288315 (R11 in line [00286])", "S21:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286798" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S22:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S22:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389109 (R18 in line [00680])", "S22:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374145 (R18 in line [00369],R19 in line [00369])", "S22:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S23:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S23:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389109 (R18 in line [00680])", "S23:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377378 (R18 in line [00440],R20 in line [00440])" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S24:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S24:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S24:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393127 (R18 in line [00772],R24 in line [00772])" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S25:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S25:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S25:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S25:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S25:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN351924", "S25:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 (R30 in line [00645])", "S25:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375641 (R18 in line [00404],R31 in line [00404])", "S25:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151555", "S25:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141786" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S26:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S26:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S26:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S26:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S26:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN351924", "S26:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 (R30 in line [00645])", "S26:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379749 (R18 in line [00489],R32 in line [00489],R33 in line [00489])", "S26:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN379383 (R18 in line [00480])", "S26:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN150220" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S27:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S27:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S27:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S27:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S27:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN328847", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740 (R18 in line [00586],R35 in line [00586],R36 in line [00586],R37 in line [00586])", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384145 (R18 in line [00572],R38 in line [00572])", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374145 (R18 in line [00369],R19 in line [00369])", "S27:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S28:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S28:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S28:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S28:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S28:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN328847", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384740 (R18 in line [00586],R35 in line [00586],R36 in line [00586],R37 in line [00586])", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381566 (R18 in line [00519],R39 in line [00519])", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN387854 (R18 in line [00654])" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625", "S29:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625", "S29:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN316312", "S29:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN392949 (R18 in line [00767],R88 in line [00767])", "S29:org.apache.kafka.clients.producer.internals.TransactionManager.enqueueRequest@POLYN400947" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135", "S30:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135", "S30:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325551", "S30:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383593 (R18 in line [00561],R106 in line [00561],R107 in line [00561])", "S30:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN381858" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371822 (R18 in line [00310],R205 in line [00310])", "S31:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399842" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S32:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S32:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389109 (R18 in line [00680])", "S32:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374145 (R18 in line [00369],R19 in line [00369])", "S32:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374145 (R18 in line [00369],R19 in line [00369])", "S32:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S33:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S33:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S33:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S33:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101 (R26 in line [00052],R27 in line [00052],R28 in line [00052])", "S33:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161101 (R26 in line [00052],R27 in line [00052],R28 in line [00052])", "S33:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN246286 (R29 in line [00100])" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN161571 (R26 in line [00060])", "S34:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN246286 (R29 in line [00100])" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163142 (R26 in line [00099],R203 in line [00099],R204 in line [00099])", "S35:org.apache.kafka.common.utils.Time.milliseconds" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133", "S36:org.apache.kafka.clients.Metadata.bootstrap@POLYN250633 (R29 in line [00172],R69 in line [00172])", "S36:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN188405" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251025 (R29 in line [00179],R90 in line [00179],R91 in line [00179],R92 in line [00179])", "S37:org.apache.kafka.clients.Metadata.update@POLYN251599 (R29 in line [00184],R93 in line [00184],R94 in line [00184],R95 in line [00184],R96 in line [00184])", "S37:org.apache.kafka.common.ClusterResource.clusterId@POLYN146889" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN367250", "S38:org.apache.kafka.clients.Metadata.failedUpdate@POLYN263261 (R29 in line [00391],R245 in line [00391])" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768", "S39:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S39:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975", "S39:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S39:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165", "S39:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN351924", "S39:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 (R30 in line [00645])", "S39:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375641 (R18 in line [00404],R31 in line [00404])", "S39:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375641 (R18 in line [00404],R31 in line [00404])", "S39:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151555", "S39:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141786" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220308", "S40:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S40:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S40:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN223446", "S40:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.getTopologyByName@POLYN222675 (R45 in line [00099])" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220308", "S41:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S41:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S41:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN223446", "S41:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN249082", "S41:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN252939", "S41:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN252939", "S41:org.apache.kafka.streams.state.internals.ThreadCache.putAll@POLYN194608", "S41:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S41:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200228 (R2 in line [00256])", "S41:org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN193127", "S41:org.apache.kafka.streams.state.internals.ThreadCache.getCache@POLYN200073 (R2 in line [00252])" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220308", "S42:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S42:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S42:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN223446", "S42:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN249082", "S42:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN252939", "S42:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN252939", "S42:org.apache.kafka.streams.state.internals.ThreadCache.putAll@POLYN194608", "S42:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193647", "S42:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193453 (R3 in line [00142],R4 in line [00142],R5 in line [00142])", "S42:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143132" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220308", "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN220606 (R45 in line [00072],R46 in line [00072])", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN551115 (R12 in line [01020])", "S43:org.apache.kafka.streams.KafkaStreams.setState@POLYN506257 (R13 in line [00225])", "S43:org.apache.kafka.streams.KafkaStreams.setState@POLYN506257 (R13 in line [00225])", "S43:org.apache.kafka.common.config.ConfigChangeCallback.onChange" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN391266 (R47 in line [00271])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN421042", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN421234 (R47 in line [00912])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN422228 (R47 in line [00931])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN422228 (R47 in line [00931])", "S44:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN255684", "S44:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN253819", "S44:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.trySend@POLYN262585", "S44:java.io.BufferedReader.ready@POLYN241913 (R48 in line [00274])", "S44:java.io.BufferedReader.ensureOpen@POLYN228516" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN391266 (R47 in line [00271])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN421042", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN421234 (R47 in line [00912])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN422228 (R47 in line [00931])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN422228 (R47 in line [00931])", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN255684", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN253819", "S45:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN260811 (R29 in line [00340])", "S45:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN261739", "S45:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN262975" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN391266 (R47 in line [00271])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN421042", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN421234 (R47 in line [00912])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN415668 (R47 in line [00780])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477 (R47 in line [00801],R49 in line [00801],R50 in line [00801])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477 (R47 in line [00801],R49 in line [00801],R50 in line [00801])", "S46:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN261285", "S46:org.apache.kafka.clients.NetworkClient.wakeup@POLYN345427" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN415248", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN386262 (R47 in line [00150])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN386262 (R47 in line [00150])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416123 (R47 in line [00793],R51 in line [00793])" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229451", "S48:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229451", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN390714", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN392338", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN419098 (R47 in line [00861],R77 in line [00861],R78 in line [00861])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN418399 (R47 in line [00848],R79 in line [00848],R80 in line [00848])" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229451", "S49:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229451", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN389395 (R47 in line [00218],R81 in line [00218])", "S49:org.apache.kafka.clients.consumer.internals.Heartbeat.poll@POLYN156605", "S49:org.apache.kafka.clients.consumer.internals.Heartbeat.update@POLYN156329", "S49:org.apache.kafka.common.utils.Timer.update@POLYN180059" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN398233", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN419396 (R47 in line [00867],R130 in line [00867],R131 in line [00867],R132 in line [00867])", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN419098 (R47 in line [00861],R77 in line [00861],R78 in line [00861])", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN418399 (R47 in line [00848],R79 in line [00848],R80 in line [00848])" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416322 (R47 in line [00797],R133 in line [00797])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477 (R47 in line [00801],R49 in line [00801],R50 in line [00801])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN416477 (R47 in line [00801],R49 in line [00801],R50 in line [00801])", "S51:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN261285", "S51:org.apache.kafka.clients.NetworkClient.wakeup@POLYN345427" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R52 in line [00184],R53 in line [00184],R54 in line [00184],R55 in line [00184],R56 in line [00184],R57 in line [00184])", "S52:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN432500", "S52:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN429232", "S52:org.apache.kafka.common.utils.BufferSupplier.get@POLYN154955" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228071 (R52 in line [00225],R60 in line [00225])", "S53:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN206666" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522 (R52 in line [00292],R61 in line [00292],R62 in line [00292])", "S54:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161130" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212 (R52 in line [00144],R85 in line [00144],R86 in line [00144])", "S55:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238321", "S55:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN202133", "S55:org.apache.kafka.common.config.provider.ConfigProvider.get" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN229906 (R52 in line [00257],R101 in line [00257],R102 in line [00257])", "S56:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN199237", "S56:org.apache.kafka.common.config.provider.ConfigProvider.get" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231319 (R52 in line [00274],R119 in line [00274],R120 in line [00274])", "S57:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN432500", "S57:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN429232", "S57:org.apache.kafka.common.utils.BufferSupplier.get@POLYN154955" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R52 in line [00184],R53 in line [00184],R54 in line [00184],R55 in line [00184],R56 in line [00184],R57 in line [00184])", "S58:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R52 in line [00184],R53 in line [00184],R54 in line [00184],R55 in line [00184],R56 in line [00184],R57 in line [00184])", "S58:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN432500", "S58:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN429232", "S58:org.apache.kafka.common.utils.BufferSupplier.get@POLYN154955" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R52 in line [00184],R53 in line [00184],R54 in line [00184],R55 in line [00184],R56 in line [00184],R57 in line [00184])", "S59:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226193 (R52 in line [00184],R53 in line [00184],R54 in line [00184],R55 in line [00184],R56 in line [00184],R57 in line [00184])", "S59:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238801", "S59:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238801", "S59:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.recomputeTaskConfigs@POLYN236020", "S59:org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN426768", "S59:org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN426768", "S59:org.apache.kafka.common.metrics.Sensor.add@POLYN216934 (R0 in line [00259])", "S59:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN301261 (R1 in line [00352])", "S59:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150232" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522 (R52 in line [00292],R61 in line [00292],R62 in line [00292])", "S60:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232522 (R52 in line [00292],R61 in line [00292],R62 in line [00292])", "S60:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161130" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN290771", "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN290771", "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN286158 (R66 in line [00527])", "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN286158 (R66 in line [00527])", "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN273422 (R66 in line [00317],R67 in line [00317])", "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274730 (R66 in line [00338],R68 in line [00338])", "S61:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274730 (R66 in line [00338],R68 in line [00338])", "S61:org.apache.kafka.common.utils.Utils.delete@POLYN441817" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.storage.KafkaStatusBackingStore.getAll@POLYN276234 (R66 in line [00365])", "S62:org.apache.kafka.common.metrics.Sensor.add@POLYN216934 (R0 in line [00259])", "S62:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN301261 (R1 in line [00352])", "S62:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150232" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133", "S63:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R70 in line [00045],R71 in line [00045],R72 in line [00045],R73 in line [00045],R74 in line [00045])", "S63:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133", "S64:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R70 in line [00045],R71 in line [00045],R72 in line [00045],R73 in line [00045],R74 in line [00045])", "S64:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R70 in line [00045],R71 in line [00045],R72 in line [00045],R73 in line [00045],R74 in line [00045])", "S64:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212 (R52 in line [00144],R85 in line [00144],R86 in line [00144])", "S65:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224212 (R52 in line [00144],R85 in line [00144],R86 in line [00144])", "S65:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238321", "S65:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN202133", "S65:org.apache.kafka.common.config.provider.ConfigProvider.get" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251025 (R29 in line [00179],R90 in line [00179],R91 in line [00179],R92 in line [00179])", "S66:org.apache.kafka.clients.Metadata.update@POLYN251599 (R29 in line [00184],R93 in line [00184],R94 in line [00184],R95 in line [00184],R96 in line [00184])", "S66:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN254603", "S66:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN254603", "S66:org.apache.kafka.clients.Metadata.requestUpdate@POLYN246119 (R29 in line [00095])" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251025 (R29 in line [00179],R90 in line [00179],R91 in line [00179],R92 in line [00179])", "S67:org.apache.kafka.clients.Metadata.update@POLYN251599 (R29 in line [00184],R93 in line [00184],R94 in line [00184],R95 in line [00184],R96 in line [00184])", "S67:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN254603", "S67:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN254603", "S67:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN222999", "S67:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN222392 (R97 in line [00164])" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457", "S68:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457", "S68:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN317323 (R99 in line [00212],R100 in line [00212])" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232 (R99 in line [00381])", "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232 (R99 in line [00381])", "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334890", "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334279 (R99 in line [00522],R114 in line [00522],R115 in line [00522])", "S69:java.io.InputStream.reset@POLYN251234 (R43 in line [00089])" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232 (R99 in line [00381])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232 (R99 in line [00381])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787 (R99 in line [00300],R116 in line [00300],R117 in line [00300])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN321787 (R99 in line [00300],R116 in line [00300],R117 in line [00300])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232 (R99 in line [00381])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN326232 (R99 in line [00381])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN329364 (R99 in line [00433],R118 in line [00433])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN329364 (R99 in line [00433],R118 in line [00433])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378 (R99 in line [00312],R143 in line [00312],R144 in line [00312],R145 in line [00312])", "S72:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN313180 (R99 in line [00128],R181 in line [00128],R182 in line [00128])", "S73:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN318224" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN324759 (R99 in line [00358],R183 in line [00358],R184 in line [00358])", "S74:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN325231 (R99 in line [00363])", "S75:org.apache.kafka.clients.ApiVersions.get@POLYN148942 (R22 in line [00028])" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN330931 (R99 in line [00465],R185 in line [00465])", "S76:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN331669 (R99 in line [00480],R186 in line [00480],R187 in line [00480])", "S77:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN331859 (R99 in line [00484],R188 in line [00484],R189 in line [00484])", "S78:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332049 (R99 in line [00488],R190 in line [00488],R191 in line [00488])", "S79:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489 (R99 in line [00493],R192 in line [00493],R193 in line [00493],R194 in line [00493])", "S80:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN332489 (R99 in line [00493],R192 in line [00493],R193 in line [00493],R194 in line [00493])", "S80:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474 (R99 in line [00526],R195 in line [00526],R196 in line [00526])", "S81:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN334474 (R99 in line [00526],R195 in line [00526],R196 in line [00526])", "S81:java.io.InputStream.reset@POLYN251234 (R43 in line [00089])" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038 (R99 in line [00537],R197 in line [00537],R198 in line [00537])", "S82:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335038 (R99 in line [00537],R197 in line [00537],R198 in line [00537])", "S82:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339116 (R99 in line [00623],R199 in line [00623])", "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339116 (R99 in line [00623],R199 in line [00623])", "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN339267 (R99 in line [00627],R200 in line [00627])", "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN339267 (R99 in line [00627],R200 in line [00627])", "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN321268" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413 (R99 in line [00631],R201 in line [00631],R202 in line [00631])", "S85:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135", "S86:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135", "S86:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325551", "S86:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383593 (R18 in line [00561],R106 in line [00561],R107 in line [00561])", "S86:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381566 (R18 in line [00519],R39 in line [00519])", "S86:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN387854 (R18 in line [00654])" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.common.metrics.Metrics.ExpireSensorTask.run@POLYN302727", "S87:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN294568 (R140 in line [00262],R1 in line [00263])", "S87:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN299717 (R1 in line [00323])", "S87:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378 (R99 in line [00312],R143 in line [00312],R144 in line [00312],R145 in line [00312])", "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN322378 (R99 in line [00312],R143 in line [00312],R144 in line [00312],R145 in line [00312])", "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160012 (R160 in line [00056],R161 in line [00056])", "S89:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159633 (R160 in line [00048],R162 in line [00048])", "S89:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160840" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160700 (R160 in line [00069],R214 in line [00069])", "S90:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160157 (R160 in line [00061],R215 in line [00061])" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413 (R99 in line [00631],R201 in line [00631],R202 in line [00631])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN339413 (R99 in line [00631],R201 in line [00631],R202 in line [00631])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN321633" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371822 (R18 in line [00310],R205 in line [00310])", "S92:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371822 (R18 in line [00310],R205 in line [00310])", "S92:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399842" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166437 (R220 in line [00154],R221 in line [00154])", "S93:org.apache.kafka.raft.QuorumState.isLeader@POLYN231549" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166437 (R220 in line [00154],R221 in line [00154])", "S94:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166437 (R220 in line [00154],R221 in line [00154])", "S94:org.apache.kafka.raft.QuorumState.isLeader@POLYN231549" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235678 (R231 in line [00141],R232 in line [00141],R233 in line [00141],R234 in line [00141])", "S95:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256070" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235678 (R231 in line [00141],R232 in line [00141],R233 in line [00141],R234 in line [00141])", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235678 (R231 in line [00141],R232 in line [00141],R233 in line [00141],R234 in line [00141])", "S96:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256070" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258907 (R235 in line [00245],R236 in line [00245],R237 in line [00245],R238 in line [00245])", "S97:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256070" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258907 (R235 in line [00245],R236 in line [00245],R237 in line [00245],R238 in line [00245])", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258907 (R235 in line [00245],R236 in line [00245],R237 in line [00245],R238 in line [00245])", "S98:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256070" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 (R240 in line [00064],R241 in line [00064])", "S99:org.apache.kafka.common.utils.Time.milliseconds" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 (R240 in line [00064],R241 in line [00064])", "S100:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163224 (R240 in line [00064],R241 in line [00064])", "S100:org.apache.kafka.common.utils.Time.milliseconds" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}