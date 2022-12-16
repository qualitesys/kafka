{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN829619.null",
      "_method" : "---dummymethode in line [01635]",
      "_target" : "java.io.ObjectInputStream.readNull@POLYN829619.return",
      "_risk" : "//QC-JAVCWZ099[01635] In java.io.ObjectInputStream.readNull@POLYN829619[01635] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN829619.return",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN829619 in line [01512]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01512] In java.io.ObjectInputStream.readObject0@POLYN824106[01512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN830005.obj",
      "_method" : "---dummymethode in line [01665]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN830005.return",
      "_risk" : "//QC-JAVCWZ099[01665] In java.io.ObjectInputStream.readHandle@POLYN830005[01665] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN830005.return",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN830005 in line [01515]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01515] In java.io.ObjectInputStream.readObject0@POLYN824106[01515] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN831303.cl",
      "_method" : "---dummymethode in line [01688]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN831303.return",
      "_risk" : "//QC-JAVCWZ099[01688] In java.io.ObjectInputStream.readClass@POLYN831303[01688] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN831303.return",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN831303 in line [01518]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01518] In java.io.ObjectInputStream.readObject0@POLYN824106[01518] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN833833.desc",
      "_method" : "---dummymethode in line [01793]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN833833.return",
      "_risk" : "//QC-JAVCWZ099[01793] In java.io.ObjectInputStream.readProxyDesc@POLYN833833[01793] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN833833.return",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN833833 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN832372 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN824106[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN836663.desc",
      "_method" : "---dummymethode in line [01851]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN836663.return",
      "_risk" : "//QC-JAVCWZ099[01851] In java.io.ObjectInputStream.readNonProxyDesc@POLYN836663[01851] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN836663.return",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN836663 in line [01713]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_risk" : "//QC-JAVCWZ099[01713] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01713] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN832372 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN824106[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN591940.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN591940[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557421.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN604563 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN557421[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604563[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN559639.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN604563 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN559639[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604563[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN565690.obj",
      "_method" : "---dummymethode in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN565690.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN565690.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN565690 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.rep",
      "_risk" : "//QC-JAVCWZ099[01144] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01144] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.rep",
      "_method" : "---dummymethode in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01149] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN236013.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN236013[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557421[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN559639.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN559639[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN245566.0",
      "_method" : "---dummymethode in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN245566.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN245566[00168] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN245566.return",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_method" : "---dummymethode in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN245566.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN245566.-1",
      "_method" : "---dummymethode in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN245566.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN245566[00173] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN245566.return",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_method" : "---dummymethode in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN245566.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "1",
      "_method" : "---dummymethode in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN245566.i",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN245566.i",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN245566.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN245566[00188] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN245566.return",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_method" : "---dummymethode in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN245566.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN591940.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587426 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN591940[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN587426[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN568160 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN568160.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN349813.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345101 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN345101.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN349813[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN345101.c",
      "_method" : "---java.io.PrintWriter.write@POLYN343572 in line [00517]",
      "_target" : "java.io.PrintWriter.write@POLYN343572.s",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN345101[00517] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN156296.path",
      "_method" : "---java.io.PrintWriter.println@POLYN352591 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN352591.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN156296[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352591.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348071 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN348071.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN352591[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348071.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343572 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN343572.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN348071[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN187354.\"\"",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703 in line [00136]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703.intro",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN352591 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN352591.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352591.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348071 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN348071.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN352591[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348071.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343572 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN343572.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN348071[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN591940.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587426 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN591940[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN588415 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN588415.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN587426[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587426 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN588415 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN588415.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN587426[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604563[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557421.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557421[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN559639.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN559639[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153352.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153352[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162992.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162992[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311388.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00931]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00931] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311388[00931] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN368827.x",
      "_method" : "---java.io.PrintStream.print@POLYN364372 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN364372.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN368827[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN364372.s",
      "_method" : "---java.io.PrintStream.write@POLYN358727 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN358727.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN364372[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN369285.x",
      "_method" : "---java.io.PrintStream.print@POLYN364836 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN364836.s",
      "_risk" : "//QC-JAVCWZ099[00806] In java.io.PrintStream.println@POLYN369285[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN364836.s",
      "_method" : "---java.io.PrintStream.write@POLYN359645 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN359645.s",
      "_risk" : "//QC-JAVCWZ099[00669] In java.io.PrintStream.print@POLYN364836[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352131.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347607 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN347607.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN352131[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN347607.s",
      "_method" : "---java.io.PrintWriter.write@POLYN342580 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN342580.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN347607[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144393.message",
      "_method" : "---java.io.PrintWriter.println@POLYN349359 in line [00038]",
      "_target" : "java.io.PrintWriter.println@POLYN349359.x",
      "_risk" : "//QC-JAVCWE099[00038] In org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144393[00038] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN349359.x",
      "_method" : "---java.io.PrintWriter.print@POLYN344604 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN344604.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN349359[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.Socket@POLYN472911.address",
      "_method" : "---java.net.Socket.connect@POLYN476686 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN476686.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN472911[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN476686.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN477336 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN477336.endpoint",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN476686[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.key"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.value"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN273638.connector"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274946.id"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332.initialTopologies"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.prefix"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.id"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.metrics"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.nowMs"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.requestVersion"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.response"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.isPartialUpdate"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.nowMs"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.connName"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.config"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.allowReplace"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.callback"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.configInfos"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309.newCacheSizeBytes"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.isDisconnected"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.cause"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.request"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.cb"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.offsetResetStrategy"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.tp"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.position"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222.tp"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN324647.dq"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813.entries"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.batch"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.exception"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.adjustSequenceNumbers"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373.exception"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373.exception"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794.batch"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606.tp"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.connName"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.callback"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.reason"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.shouldResetMemberId"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.reason"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.shouldResetMemberId"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.key"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.value"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.key"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.value"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.api"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.error"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.shouldResetMemberId"
  }, {
    "_id" : "R50",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.b"
  }, {
    "_id" : "R51",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.off"
  }, {
    "_id" : "R52",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.len"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.tp"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.position"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.requestedResetStrategy"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN335825.partitionDequeue"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN156798.compressionRatioForTopic"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.key"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.value"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414.cause"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.batch"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.response"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102.status"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723.status"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.key"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.value"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.windowStartTimestamp"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN341260.deque"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.pattern"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.listener"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.tp"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.position"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.tp"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.highWatermark"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.tp"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.logStartOffset"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.tp"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.lastStableOffset"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.tp"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.preferredReadReplicaId"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.timeMs"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.partitions"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.offsetResetStrategy"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.partitions"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.nextAllowResetTimeMs"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974.tp"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125.tp"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.partitions"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.nextRetryTimeMs"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.topic"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.nowMs"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.lastVersion"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.timeoutMs"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.requestVersion"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.response"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.isPartialUpdate"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.nowMs"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050.topicPartition"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.topicPartition"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.increment"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.connector"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.configs"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790.status"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247.status"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527.newLeader"
  }, {
    "_id" : "R106",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.b"
  }, {
    "_id" : "R107",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.off"
  }, {
    "_id" : "R108",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.len"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.key"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.value"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.windowStartTimestamp"
  }, {
    "_id" : "R112",
    "_libelle" : "java.io.PipedReader.receive@POLYN202159.c"
  }, {
    "_id" : "R113",
    "_libelle" : "java.io.PipedReader.receive@POLYN202159.off"
  }, {
    "_id" : "R114",
    "_libelle" : "java.io.PipedReader.receive@POLYN202159.len"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315522", "S0:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315522", "S0:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN373130", "S0:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN373130", "S0:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.prepareRepartitionTopics@POLYN382100", "S0:org.apache.kafka.streams.processor.internals.InternalTopicManager.setup@POLYN296749", "S0:org.apache.kafka.streams.processor.internals.InternalTopicManager.setup@POLYN296749", "S0:org.apache.kafka.streams.processor.internals.InternalTopicManager.processCreateTopicResults@POLYN298911", "S0:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S0:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R0 in line [00157],R1 in line [00157])", "S0:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315522", "S1:org.apache.kafka.streams.processor.internals.StoreChangelogReader.addChangelogsToRestoreConsumer@POLYN315522", "S1:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN373130", "S1:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN373130", "S1:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.prepareRepartitionTopics@POLYN382100", "S1:org.apache.kafka.streams.processor.internals.InternalTopicManager.setup@POLYN296749", "S1:org.apache.kafka.streams.processor.internals.InternalTopicManager.setup@POLYN296749", "S1:org.apache.kafka.streams.processor.internals.InternalTopicManager.processCreateTopicResults@POLYN298911", "S1:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S1:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R0 in line [00157],R1 in line [00157])", "S1:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R0 in line [00157],R1 in line [00157])", "S1:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181343", "S2:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R5 in line [00060],R6 in line [00060],R7 in line [00060],R8 in line [00060])", "S2:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181343", "S3:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R5 in line [00060],R6 in line [00060],R7 in line [00060],R8 in line [00060])", "S3:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R5 in line [00060],R6 in line [00060],R7 in line [00060],R8 in line [00060])", "S3:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.clients.Metadata.update@POLYN252367 (R9 in line [00263],R10 in line [00263],R11 in line [00263],R12 in line [00263])", "S4:org.apache.kafka.common.ClusterResource.clusterId@POLYN147039" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.clients.Metadata.update@POLYN252367 (R9 in line [00263],R10 in line [00263],R11 in line [00263],R12 in line [00263])", "S5:org.apache.kafka.clients.Metadata.update@POLYN252367 (R9 in line [00263],R10 in line [00263],R11 in line [00263],R12 in line [00263])", "S5:org.apache.kafka.common.ClusterResource.clusterId@POLYN147039" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295 (R13 in line [00201],R14 in line [00201],R15 in line [00201],R16 in line [00201],R17 in line [00201])", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295 (R13 in line [00201],R14 in line [00201],R15 in line [00201],R16 in line [00201],R17 in line [00201])", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.recomputeTaskConfigs@POLYN236122" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411811", "S7:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413831", "S7:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434864", "S7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN416760", "S7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R19 in line [00947],R20 in line [00947])", "S7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R19 in line [00947],R20 in line [00947])", "S7:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R21 in line [00309],R22 in line [00309])", "S8:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R21 in line [00309],R22 in line [00309])", "S9:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R21 in line [00309],R22 in line [00309])", "S9:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R25 in line [00380],R26 in line [00380])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R25 in line [00380],R26 in line [00380])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314 (R37 in line [00161],R38 in line [00161])", "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314 (R37 in line [00161],R38 in line [00161])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314 (R37 in line [00161],R38 in line [00161])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R53 in line [00392],R54 in line [00392],R55 in line [00392])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R53 in line [00392],R54 in line [00392],R55 in line [00392])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R53 in line [00392],R54 in line [00392],R55 in line [00392])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R79 in line [00598],R80 in line [00598],R81 in line [00598])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R79 in line [00598],R80 in line [00598],R81 in line [00598])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R82 in line [00642],R83 in line [00642])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R82 in line [00642],R83 in line [00642])", "S16:java.io.InputStream.reset@POLYN252866" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R84 in line [00653],R85 in line [00653])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R84 in line [00653],R85 in line [00653])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R88 in line [00747],R89 in line [00747])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R88 in line [00747],R89 in line [00747])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R88 in line [00747],R89 in line [00747])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R90 in line [00067],R91 in line [00067])", "S20:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R90 in line [00067],R91 in line [00067])", "S20:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}