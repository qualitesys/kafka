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
      "_source" : "java.io.PrintWriter.println@POLYN364830.s",
      "_method" : "---java.io.PrintWriter.print@POLYN359787 in line [00756]",
      "_target" : "java.io.PrintWriter.print@POLYN359787.s",
      "_risk" : "//QC-JAVCWZ099[00756] In java.io.PrintWriter.println@POLYN364830[00756] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN156105.message",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00038]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00038] In org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN156105[00038] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
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
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897539.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.InputStream.read@POLYN257278.b",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.InputStream.read@POLYN257278.b",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN816062.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN816062[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257278.b",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.destinationBuffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.destinationBuffer",
      "_risk" : ""
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897539.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.InputStream.read@POLYN257278.len",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.InputStream.read@POLYN257278.len",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN816062.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN816062[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897539.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.InputStream.read@POLYN257278.off",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.InputStream.read@POLYN257278.off",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN816062.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN816062[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN504807 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN504807.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN413731.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN507514 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN507514.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN413731.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN213281.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_method" : "---java.io.OutputStream.write@POLYN187636 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187636.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN213281.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_method" : "---java.io.OutputStream.write@POLYN187636 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187636.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN214732.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_method" : "---java.io.OutputStream.write@POLYN187636 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187636.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893.connName"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.prefix"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.id"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.metrics"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.this"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454.request"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN160541.nodeId"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428995.error"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN370062.dq"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN405097.e"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481.batch"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN213581.consumedMessage"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295.taskId"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.requestVersion"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.response"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.isPartialUpdate"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.nowMs"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN336359.dq"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032.connName"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032.callback"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352.request"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352.cb"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974.reason"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974.shouldResetMemberId"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275.reason"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275.shouldResetMemberId"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714.batch"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714.exception"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714.adjustSequenceNumbers"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119.exception"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386587.exception"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101.exception"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393532.batch"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389334.tp"
  }, {
    "_id" : "R45",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272.api"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272.error"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272.shouldResetMemberId"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831.partition"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831.offsetResetStrategy"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275.key"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275.value"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN160269.nodeId"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN160269.nodeApiVersions"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565.response"
  }, {
    "_id" : "R61",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R62",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN504807.size"
  }, {
    "_id" : "R63",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN507514.size"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265342.activePartitionHostMap"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265342.standbyPartitionHostMap"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265342.clusterMetadata"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902.tp"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902.position"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902.requestedResetStrategy"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.prefix"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.id"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.metrics"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.nowMs"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.connName"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.config"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.allowReplace"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.callback"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.configInfos"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730.taskId"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730.cb"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147.connName"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147.cb"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285394.connector"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286708.id"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302.cleanupDelayMs"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN194494.entries"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R93",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN370686.dq"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN404919.request"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN185531.key"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN185531.value"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN498171.applicationConfig"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.isDisconnected"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.cause"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429194.cause"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN347579.partitionDequeue"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN392105.batch"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547.deque"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597.topicPartition"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391709.topicPartition"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391709.increment"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN193408.key"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN193408.value"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN268242.key"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN268242.value"
  }, {
    "_id" : "R120",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R121",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN181949.snk"
  }, {
    "_id" : "R122",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R123",
    "_libelle" : "java.io.PipedWriter.connect@POLYN181179.snk"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN213352.preTransformRecord"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN165915.committedOffsets"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202678.listener"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN263133.addresses"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325686.pattern"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325686.listener"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334311.tp"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334311.position"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337287.tp"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337287.position"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN341902.tp"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN344217.tp"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN344217.highWatermark"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344407.tp"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344407.logStartOffset"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344597.tp"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344597.lastStableOffset"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037.tp"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037.preferredReadReplicaId"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037.timeMs"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347590.partitions"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347590.nextAllowResetTimeMs"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351680.tp"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351831.tp"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351977.partitions"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351977.nextRetryTimeMs"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778.topicPartition"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN178751.connector"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN178751.properties"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN179372.connector"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN181266.connector"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN181266.state"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171814.status"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171435.status"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN172502.status"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171959.status"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN181117.aclMutator"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN184894.configs"
  }, {
    "_id" : "R169",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R170",
    "_libelle" : "java.io.PipedReader.receive@POLYN210743.c"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN247896.builder"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN586397.partitions"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN586397.logPrefix"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN587210.topics"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN587210.logPrefix"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN170922.force"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN158955.amount"
  }, {
    "_id" : "R183",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230704.b"
  }, {
    "_id" : "R185",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.b"
  }, {
    "_id" : "R186",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.off"
  }, {
    "_id" : "R187",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.len"
  }, {
    "_id" : "R188",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.c"
  }, {
    "_id" : "R189",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.off"
  }, {
    "_id" : "R190",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.len"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN275801.now"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN212470.errorHandlingMetrics"
  }, {
    "_id" : "R193",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R194",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN399877.exception"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893 (R1 in line [00242],R2 in line [00242])", "S0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893 (R1 in line [00242],R2 in line [00242])", "S0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN250653", "S0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN250653", "S0:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN250171", "S0:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN474780", "S0:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN472559", "S0:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN471429", "S0:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN471429", "S0:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233515 (R1 in line [00105])", "S1:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN250171", "S1:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN474780", "S1:org.apache.kafka.connect.runtime.Worker.awaitStopTasks@POLYN473828", "S1:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN472783", "S1:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.recordTaskRemoved@POLYN505600 (R3 in line [01743])" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032 (R1 in line [00161],R29 in line [00161],R30 in line [00161])", "S2:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN250171", "S2:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN474780", "S2:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN472559", "S2:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN471429", "S2:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN471429", "S2:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R1 in line [00309],R31 in line [00309],R32 in line [00309])", "S3:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R1 in line [00309],R31 in line [00309],R32 in line [00309])", "S3:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S3:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S3:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S3:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013 (R1 in line [00201],R76 in line [00201],R77 in line [00201],R78 in line [00201],R79 in line [00201],R80 in line [00201])", "S4:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S4:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S4:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S4:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730 (R1 in line [00274],R81 in line [00274],R82 in line [00274])", "S5:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTask@POLYN475097", "S5:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN471429", "S5:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN471429", "S5:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147 (R1 in line [00291],R83 in line [00291],R84 in line [00291])", "S6:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S6:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S6:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S6:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893 (R1 in line [00242],R2 in line [00242])", "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893 (R1 in line [00242],R2 in line [00242])", "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN250653", "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN250653", "S7:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN250171", "S7:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN474780", "S7:org.apache.kafka.connect.runtime.Worker.awaitStopTasks@POLYN473828", "S7:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN472783", "S7:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.recordTaskRemoved@POLYN505600 (R3 in line [01743])" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN193055", "S8:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN193055", "S8:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S8:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S8:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R4 in line [00072],R5 in line [00072],R6 in line [00072],R7 in line [00072])", "S8:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN175466" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743 (R4 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060])", "S9:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN174649" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN193055", "S10:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN193055", "S10:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S10:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S10:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R4 in line [00072],R5 in line [00072],R6 in line [00072],R7 in line [00072])", "S10:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R4 in line [00072],R5 in line [00072],R6 in line [00072],R7 in line [00072])", "S10:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN175466" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R8 in line [01387],R9 in line [01387])", "S11:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R8 in line [01387],R9 in line [01387])", "S11:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S11:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S11:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S11:org.apache.kafka.connect.runtime.isolation.Plugins.compareAndSwapLoaders@POLYN228781" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R8 in line [01387],R9 in line [01387])", "S12:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R8 in line [01387],R9 in line [01387])", "S12:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN474780", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTasks@POLYN473828", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN472783", "S12:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.recordTaskRemoved@POLYN505600 (R3 in line [01743])" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN427724", "S13:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN399066 (R12 in line [00240])", "S13:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN399066 (R12 in line [00240])", "S13:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428995 (R12 in line [00939],R13 in line [00939])" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN403528", "S14:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN405154", "S14:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974 (R12 in line [01017],R33 in line [01017],R34 in line [01017])", "S14:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275 (R12 in line [01004],R35 in line [01004],R36 in line [01004])" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272 (R12 in line [01023],R46 in line [01023],R47 in line [01023],R48 in line [01023])", "S15:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974 (R12 in line [01017],R33 in line [01017],R34 in line [01017])", "S15:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275 (R12 in line [01004],R35 in line [01004],R36 in line [01004])" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN428540 (R12 in line [00926])", "S16:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R12 in line [00947],R102 in line [00947],R103 in line [00947])", "S16:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R12 in line [00947],R102 in line [00947],R103 in line [00947])", "S16:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN273755" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429194 (R12 in line [00943],R104 in line [00943])", "S17:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R12 in line [00947],R102 in line [00947],R103 in line [00947])", "S17:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R12 in line [00947],R102 in line [00947],R103 in line [00947])", "S17:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN273755" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S18:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN405097 (R16 in line [00810],R17 in line [00810])" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S19:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S19:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481 (R16 in line [00708],R18 in line [00708])" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN338120", "S20:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S20:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R16 in line [00624],R37 in line [00624],R38 in line [00624],R39 in line [00624])", "S20:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119 (R16 in line [00610],R40 in line [00610])", "S20:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386587 (R16 in line [00397],R41 in line [00397])", "S20:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN160187" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN338120", "S21:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S21:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R16 in line [00624],R37 in line [00624],R38 in line [00624],R39 in line [00624])", "S21:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119 (R16 in line [00610],R40 in line [00610])", "S21:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101 (R16 in line [00386],R42 in line [00386])" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN338120", "S22:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S22:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R16 in line [00624],R37 in line [00624],R38 in line [00624],R39 in line [00624])", "S22:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393532 (R16 in line [00557],R43 in line [00557])", "S22:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN338120", "S23:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S23:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R16 in line [00624],R37 in line [00624],R38 in line [00624],R39 in line [00624])", "S23:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389334 (R16 in line [00468],R44 in line [00468])" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN333805", "S24:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN337663", "S24:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565 (R16 in line [00599],R59 in line [00599],R60 in line [00599])", "S24:org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN394582", "S24:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN162024" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN324707", "S25:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN328408", "S25:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN404919 (R16 in line [00805],R95 in line [00805])", "S25:org.apache.kafka.clients.producer.internals.TransactionManager.enqueueRequest@POLYN412929" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN347579 (R105 in line [00482])", "S26:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN392105 (R16 in line [00528],R106 in line [00528])", "S26:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R107 in line [00799])", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597 (R16 in line [00426],R108 in line [00426])", "S27:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163363" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R107 in line [00799])", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391709 (R16 in line [00521],R109 in line [00521],R110 in line [00521])", "S28:org.apache.kafka.common.record.DefaultRecordBatch.incrementSequence@POLYN288155" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778 (R16 in line [00327],R153 in line [00327])", "S29:org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN415667" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.streams.processor.internals.TaskManager.maybeCloseTasksFromRemovedTopologies@POLYN401050", "S30:org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedDirectoriesForTasks@POLYN381140", "S30:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295 (R21 in line [00001],R22 in line [00001])" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302 (R21 in line [00001],R89 in line [00001])", "S31:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S31:org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272371", "S31:org.apache.kafka.common.utils.Utils.delete@POLYN456117" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266088 (R21 in line [00001])", "S32:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN261134 (R177 in line [00001])" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.clients.Metadata.update@POLYN264099 (R23 in line [00263],R24 in line [00263],R25 in line [00263],R26 in line [00263],R27 in line [00263])", "S33:org.apache.kafka.clients.Metadata.maybeSetMetadataError@POLYN266019", "S33:org.apache.kafka.clients.Metadata.checkInvalidTopics@POLYN266252" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.Metadata.bootstrap@POLYN263133 (R23 in line [00238],R129 in line [00238])", "S34:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN200379" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN379924", "S35:org.apache.kafka.clients.Metadata.failedUpdate@POLYN275801 (R23 in line [00490],R191 in line [00490])" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.clients.Metadata.update@POLYN264099 (R23 in line [00263],R24 in line [00263],R25 in line [00263],R26 in line [00263],R27 in line [00263])", "S36:org.apache.kafka.clients.Metadata.update@POLYN264099 (R23 in line [00263],R24 in line [00263],R25 in line [00263],R26 in line [00263],R27 in line [00263])", "S36:org.apache.kafka.clients.Metadata.maybeSetMetadataError@POLYN266019", "S36:org.apache.kafka.clients.Metadata.checkInvalidTopics@POLYN266252" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338762 (R49 in line [00477])", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338762 (R49 in line [00477])", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347442", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831 (R49 in line [00636],R50 in line [00636],R51 in line [00636])", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902 (R49 in line [00390],R69 in line [00390],R70 in line [00390],R71 in line [00390])", "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902 (R49 in line [00390],R69 in line [00390],R70 in line [00390],R71 in line [00390])", "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.seekUnvalidated@POLYN360376", "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.seekValidated@POLYN360004" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325686 (R49 in line [00172],R131 in line [00172],R132 in line [00172])", "S39:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330740" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334311 (R49 in line [00378],R133 in line [00378],R134 in line [00378])", "S40:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337287 (R49 in line [00443],R135 in line [00443],R136 in line [00443])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN341902 (R49 in line [00529],R137 in line [00529])", "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN344217 (R49 in line [00576],R138 in line [00576],R139 in line [00576])", "S43:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344407 (R49 in line [00580],R140 in line [00580],R141 in line [00580])", "S44:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344597 (R49 in line [00584],R142 in line [00584],R143 in line [00584])", "S45:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037 (R49 in line [00596],R144 in line [00596],R145 in line [00596],R146 in line [00596])", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347590 (R49 in line [00651],R147 in line [00651],R148 in line [00651])", "S47:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351680 (R49 in line [00737],R149 in line [00737])", "S48:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351831 (R49 in line [00741],R150 in line [00741])", "S49:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351977 (R49 in line [00745],R151 in line [00745],R152 in line [00745])", "S50:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.requestFailed@POLYN359575" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.state.internals.NamedCache.putIfAbsent@POLYN209156 (R54 in line [00248])", "S51:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R54 in line [00157],R55 in line [00157],R56 in line [00157])", "S51:org.apache.kafka.streams.state.internals.NamedCache.LRUNode.update@POLYN215401" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN202816 (R54 in line [00108])", "S52:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN202922", "S52:org.apache.kafka.common.metrics.Sensor.add@POLYN226770", "S52:org.apache.kafka.common.metrics.Sensor.add@POLYN227168 (R92 in line [00290])" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.registerCacheFlushListener@POLYN180341", "S53:org.apache.kafka.streams.state.internals.ThreadCache.addDirtyEntryFlushListener@POLYN204142", "S53:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202678 (R54 in line [00104],R128 in line [00104])" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.state.internals.NamedCache.putIfAbsent@POLYN209156 (R54 in line [00248])", "S54:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R54 in line [00157],R55 in line [00157],R56 in line [00157])", "S54:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R54 in line [00157],R55 in line [00157],R56 in line [00157])", "S54:org.apache.kafka.streams.state.internals.NamedCache.LRUNode.update@POLYN215401" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN333805", "S55:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN337663", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565 (R16 in line [00599],R59 in line [00599],R60 in line [00599])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393532 (R16 in line [00557],R43 in line [00557])", "S55:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743 (R4 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060])", "S56:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743 (R4 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060])", "S56:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN174649" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302 (R21 in line [00001],R89 in line [00001])", "S57:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S57:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295 (R21 in line [00001],R22 in line [00001])" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R107 in line [00799])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597 (R16 in line [00426],R108 in line [00426])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597 (R16 in line [00426],R108 in line [00426])", "S58:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163363" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778 (R16 in line [00327],R153 in line [00327])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778 (R16 in line [00327],R153 in line [00327])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN415667" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171814 (R160 in line [00071],R161 in line [00071])", "S60:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171435 (R160 in line [00063],R162 in line [00063])" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN172502 (R160 in line [00084],R163 in line [00084])", "S61:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171959 (R160 in line [00076],R164 in line [00076])" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}