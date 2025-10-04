{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603710[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN579892 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN579892.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851753.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN851753[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.unshared",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835896[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.unshared",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835896[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN866712.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN866712[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376088.s",
      "_method" : "---java.io.PrintStream.write@POLYN370443 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN370443.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN376088[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN380543.x",
      "_method" : "---java.io.PrintStream.print@POLYN376088 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN376088.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN380543[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN370443.buf",
      "_method" : "---java.io.Writer.write@POLYN202163 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN202163.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN370443[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603710[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN600177 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN600177 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN603710[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.array",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.array",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571357.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571357[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN569139[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571357.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571357[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObjectOverride@POLYN570029.obj",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN247731.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN247731[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359323.s",
      "_method" : "---java.io.PrintWriter.write@POLYN354296 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN354296.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN359323[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN363847.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359323 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN359323.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN363847[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359787.s",
      "_method" : "---java.io.PrintWriter.write@POLYN355288 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN355288.s",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.PrintWriter.print@POLYN359787[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN364307.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359787 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN359787.s",
      "_risk" : "//QC-JAVCWZ099[00739] In java.io.PrintWriter.println@POLYN364307[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359787.s",
      "_method" : "---java.io.PrintWriter.write@POLYN355288 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN355288.s",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.PrintWriter.print@POLYN359787[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN364830.s",
      "_method" : "---java.io.PrintWriter.print@POLYN359787 in line [00756]",
      "_target" : "java.io.PrintWriter.print@POLYN359787.s",
      "_risk" : "//QC-JAVCWZ099[00756] In java.io.PrintWriter.println@POLYN364830[00756] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN479635.address",
      "_method" : "---java.net.Socket.connect@POLYN483414 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN483414.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN479635[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN483414.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN484064 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN484064.endpoint",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN483414[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R1",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R2",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R3",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN181949.snk"
  }, {
    "_id" : "R4",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R5",
    "_libelle" : "java.io.PipedWriter.connect@POLYN181179.snk"
  }, {
    "_id" : "R6",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R7",
    "_libelle" : "java.io.PipedReader.receive@POLYN210743.c"
  }, {
    "_id" : "R8",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R9",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230704.b"
  }, {
    "_id" : "R10",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.b"
  }, {
    "_id" : "R11",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.off"
  }, {
    "_id" : "R12",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.len"
  }, {
    "_id" : "R13",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.c"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.off"
  }, {
    "_id" : "R15",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.len"
  } ],
  "_lesDeadlocksSequences" : [ ],
  "_lesDeadlocksTypos" : [ ]
}