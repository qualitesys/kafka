{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN232919.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN241046[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN241046[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN241046[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN241046[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN241046[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN244233.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN244233[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN248212.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN429843.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN426309 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN429843.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.dummymethode_00102 in line [00102]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.result",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.result",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.dummymethode_00106 in line [00106]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN429843.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN429843 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN244233.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN244233 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN182571.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN182571[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN182571.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN429843 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN429843.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN241046[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN241046[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN241046[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN241046[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN241046.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN241046[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN241046.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN241046 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN244233.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN244233[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN244561.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN244561.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN244561.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN244561.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN244561.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN429843.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN426309 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN429843.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.dummymethode_00102 in line [00102]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.result",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.result",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.dummymethode_00106 in line [00106]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN160410.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN429843.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN429843 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN244233.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN244233 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN182571.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN182571[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN182571.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN429843 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN429843.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN367652.s",
      "_method" : "---java.io.PrintStream.write@POLYN362461 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN362461.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN367652[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN914554.return",
      "_method" : "---java.lang.String.valueOf@POLYN914554 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN372622.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN372622.s",
      "_method" : "---java.io.PrintStream.print@POLYN367652 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN367652.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN372622[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN362461.s",
      "_method" : "---java.io.Writer.write@POLYN193932 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN193932.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN362461[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN193932.str",
      "_method" : "---java.io.Writer.write@POLYN194525 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN193932.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN193932[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN377444.d",
      "_method" : "---java.lang.Double.toString@POLYN377444.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN377444.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN914554.d",
      "_method" : "---java.lang.Double.toString@POLYN377444 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN377444.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN377444.return",
      "_method" : "---java.lang.Double.toString@POLYN377444 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN914554.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.Node@POLYN608726.value",
      "_method" : "---java.util.HashMap.Node.Node@POLYN608726.dummymethode_00287 in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN609261.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN609261.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN609261.return",
      "_method" : "---java.util.HashMap.getValue@POLYN609261 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202920.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202920.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN914554 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN914554.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN367652.s",
      "_method" : "---java.io.PrintStream.write@POLYN362461 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN362461.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN367652[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN914554.return",
      "_method" : "---java.lang.String.valueOf@POLYN914554 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN372622.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN372622.s",
      "_method" : "---java.io.PrintStream.print@POLYN367652 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN367652.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN372622[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN362461.s",
      "_method" : "---java.io.Writer.write@POLYN193932 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN193932.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN362461[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN193932.str",
      "_method" : "---java.io.Writer.write@POLYN194525 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN193932.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN193932[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN377444.d",
      "_method" : "---java.lang.Double.toString@POLYN377444.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN377444.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN914554.d",
      "_method" : "---java.lang.Double.toString@POLYN377444 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN377444.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN377444.return",
      "_method" : "---java.lang.Double.toString@POLYN377444 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN914554.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN609261.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN609261.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.setValue@POLYN609680.newValue",
      "_method" : "---java.util.HashMap.Node.setValue@POLYN609680.dummymethode_00301 in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN609261.return",
      "_method" : "---java.util.HashMap.getValue@POLYN609261 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202920.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202920.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN914554 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN914554.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN248382.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN248382.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN248382[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN248382.i",
      "_method" : "---java.io.InputStream.read@POLYN248382.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN248382.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN248382[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874930.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874930 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN887848.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN806576.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN806576 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN248382.return",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN874523[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874930.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874930.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874930.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874930.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874930.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN887848.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN887848 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN806576.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN895495 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN809339.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN238284.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN238284 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN841750.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN841750 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN847059[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN813589.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN813589 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN841750.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN841750[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN841750.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN841750.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN841750.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN841750[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN813589.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN238284.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN238284.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN238284.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN238284.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN238284 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN841750.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN841750 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN847059[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN813589.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN813589 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN841750.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN841750[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN841750.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN841750.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN841750.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN841750[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN813589.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN238284.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN238284.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN238284.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN238284.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN238284 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN841750.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN841750 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN847059[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN813589.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN813589 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN841750.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN841750[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN841750.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN841750.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN841750.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN841750[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN900390 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN813589.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN238284.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN238284.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN238284.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN568506.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN568506.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN568506.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN568506.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN568506 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN603128 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN604971 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN563111.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN563111.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN594756[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601936.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN601936.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN601936[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN601936.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601936.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN601936[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN603128 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN603128.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN603128[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN563111.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN563111.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601936.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN601936.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN601936[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN601936.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601936.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN601936[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN603128 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN603128.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN603128[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN562455.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN562455[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN842717.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN826922 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN826922.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN842717[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN836649 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN835188[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN835188.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN835188[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN826922.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN835188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN826922[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN835188 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN849309[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN854450 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN849309[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN836649 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN835188[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN835188.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN835188[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN826922.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN835188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN826922[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN835188.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN835188 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN849309[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN854450 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN849309[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN857624.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN826922 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN826922.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN857624[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN590242 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN594756[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN590242[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN570976 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN570976.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN288635.return",
      "_method" : "---java.lang.Object.getClass@POLYN288635 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN594756 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN594756.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN590242 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN594756[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN590242[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN570976 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN570976.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN594756 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN594756.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.lang.Class.newInstance@POLYN1081119.return",
      "_method" : "---java.lang.Class.newInstance@POLYN1081119 in line [01897]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN842717.array",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN842717.array",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN842717.dummymethode_01940 in line [01940]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN842717.return",
      "_risk" : "//QC-JAVCWE099[01940] In java.io.ObjectInputStream.readArray@POLYN842717[01940] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.Class.reflectionFactory",
      "_method" : "---java.lang.Class.getReflectionFactory@POLYN1199799.dummymethode_03891 in line [03891]",
      "_target" : "java.lang.Class.getReflectionFactory@POLYN1199799.factory",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.Class.getReflectionFactory@POLYN1199799.factory",
      "_method" : "---java.lang.Class.getReflectionFactory@POLYN1199799.dummymethode_03893 in line [03893]",
      "_target" : "java.lang.Class.getReflectionFactory@POLYN1199799.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.Class.getReflectionFactory@POLYN1199799.return",
      "_method" : "---java.lang.Class.getReflectionFactory@POLYN1199799 in line [00685]",
      "_target" : "java.lang.Class.newInstance@POLYN1081119.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN842717.return",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN842717 in line [00044]",
      "_target" : "org.apache.kafka.raft.internals.StringSerde.read@POLYN148062.cibledummy_00044",
      "_risk" : "//QC-JAVCWE099[00044] In org.apache.kafka.raft.internals.StringSerde.read@POLYN148062[00044] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN378817.l",
      "_method" : "---java.lang.String.format@POLYN908613 in line [01027]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN362400.l",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00964]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN191228.\"%s",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00208]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN191228.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00212]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN427312.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00293]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN196040.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00096]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN244158.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00314]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN352175.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347420 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN347420.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN352175[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN908613.l",
      "_method" : "---java.lang.String.format@POLYN908613.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN908613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN908613.return",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469.data",
      "_method" : "---java.io.PrintWriter.println@POLYN352175 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN352175.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN152469[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN236225.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN908613 in line [00112]",
      "_target" : "java.lang.String.format@POLYN908613.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN234560.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN234560.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN234560.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN234560[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.toArray@POLYN419595.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.toArray@POLYN419595 in line [00104]",
      "_target" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeByteBuffer@POLYN158974.bytes",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeByteBuffer@POLYN158974.bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN234560 in line [00105]",
      "_target" : "java.io.FileOutputStream.write@POLYN234560.b",
      "_risk" : "//QC-JAVCWE099[00105] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeByteBuffer@POLYN158974[00105] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.toArray@POLYN419595.dest",
      "_method" : "---org.apache.kafka.common.utils.Utils.toArray@POLYN419595.dummymethode_00293 in line [00293]",
      "_target" : "org.apache.kafka.common.utils.Utils.toArray@POLYN419595.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN248382.0",
      "_method" : "---java.io.InputStream.read@POLYN248382.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN248382.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN248382[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN248382.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN457527[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN248382.return",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN457527[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN457527.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN248382.-1",
      "_method" : "---java.io.InputStream.read@POLYN248382.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN248382.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN248382[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN248382.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN457527[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN248382.return",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN457527[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN457527.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN248382.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN457527[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN457527[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN457527.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN456261.destinationBuffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN457527 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN457527.destinationBuffer",
      "_risk" : ""
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN793496.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN793496.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN852523.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN852523.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN852523[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN852523.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN852523.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN852523[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN854450.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN854450.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN854450[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN575935 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN575935.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN575935.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN575935 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN575935.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN575935[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593981.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN581373.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN593981 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN593981.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN581373[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN367188.s",
      "_method" : "---java.io.PrintStream.write@POLYN361543 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN361543.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN367188[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN371643.x",
      "_method" : "---java.io.PrintStream.print@POLYN367188 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN367188.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN371643[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN361543.buf",
      "_method" : "---java.io.Writer.write@POLYN193267 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN193267.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN361543[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.Writer.write@POLYN193267.cbuf",
      "_method" : "---java.io.Writer.write@POLYN193267.dummymethode_00127 in line [00127]",
      "_target" : "java.io.Writer.write@POLYN193267.cibledummy_00127",
      "_risk" : "//QC-JAVCWZ099[00127] In java.io.Writer.write@POLYN193267[00127] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN245223.b",
      "_method" : "---java.io.InputStream.read@POLYN245223.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN245223.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN245223[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN301780.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN301780 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN303462.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN301780.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN245223 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN245223.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN301780[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN245223.return",
      "_method" : "---java.io.InputStream.read@POLYN245223 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN301780.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN301780[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN242399.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN242399[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN240803[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN240198[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN240803 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN242870.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN242870[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN240803[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN240198[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN240803 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN242642.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN242642[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN240803[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN240198[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN240803 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN243113.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN243113[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN240803[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN240198[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN240803 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN240803[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN240198[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN243347.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN243347[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN240803.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN240803 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.cbuf",
      "_method" : "---java.io.Reader.read@POLYN186325 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN235887[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN235887 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN239093[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN239093.n",
      "_method" : "---java.io.BufferedReader.read@POLYN239093.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN239093[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.len",
      "_method" : "---java.io.Reader.read@POLYN186325 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN235887[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN235887 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN239093[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN239093.n",
      "_method" : "---java.io.BufferedReader.read@POLYN239093.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN239093[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.off",
      "_method" : "---java.io.Reader.read@POLYN186325 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN235887[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN235887 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN239093[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN239093.n",
      "_method" : "---java.io.BufferedReader.read@POLYN239093.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN239093[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN186325.return",
      "_method" : "---java.io.Reader.read@POLYN186325 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN235887[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN235887 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN239093[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN239093.n",
      "_method" : "---java.io.BufferedReader.read@POLYN239093.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN239093[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN235887.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN235887[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN235887.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN235887 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN239093[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN239093.n",
      "_method" : "---java.io.BufferedReader.read@POLYN239093.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN239093.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN239093[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN862894.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN862894 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794939.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794939.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794939 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794939.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN794939[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794939.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794939.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794939.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN794939[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794939.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN862894 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794939.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794939.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794939 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794939.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN794939[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794939.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794939.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794939.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN794939[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN806149.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN806149.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN806149.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN806149[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN806149.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN806149 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN839479.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN839479[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN839479.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN839479.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN839479.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN839479[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN350423.s",
      "_method" : "---java.io.PrintWriter.write@POLYN345396 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN345396.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN350423[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN354947.x",
      "_method" : "---java.io.PrintWriter.print@POLYN350423 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN350423.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN354947[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN345396.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN345396.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN345396.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN345396[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN185062.return",
      "_method" : "---java.io.Reader.read@POLYN185062 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN184070.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN184070[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN184070.n",
      "_method" : "---java.io.Reader.read@POLYN184070.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN184070.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN184070[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN185062.-1",
      "_method" : "---java.io.Reader.read@POLYN185062.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN185062.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN185062[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN320202.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN320202.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN320202.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN320202[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN320202.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN320202.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN320202.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN320202[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN320202.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN320202 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN321146.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN321146[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN242399.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN242399[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN240803.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN240803[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN240198.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN240198.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN240198.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN240198[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "0",
      "_method" : "---java.io.BufferedInputStream.read@POLYN246868.dummymethode_00343 in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN246868.n",
      "_risk" : "//QC-JAVCWE099[00343] In java.io.BufferedInputStream.read@POLYN246868[00343] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN246868.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN246868.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN246868.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN246868[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN246868.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN246868.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN246868.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN246868[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN246868.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN246868.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN246868.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN246868[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN161670.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN161670[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162966.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN162966[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162966.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN162966[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360757.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN360757[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN161670.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN161670[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162966.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162966[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162966.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162966[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360757.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN360757[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN161670.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN161670[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162966.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162966[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162966.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162966[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360757.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162966 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162966.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN360757[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN194525.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN194525.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN194525[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN194525.cbuf",
      "_method" : "---java.io.Writer.write@POLYN193691 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN193691.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN194525[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN345710.len",
      "_method" : "---java.io.Writer.write@POLYN194525 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN194525.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN345710[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN194525.len",
      "_method" : "---java.io.Writer.write@POLYN193691 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN193691.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN194525[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN184717.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN184717.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN184717.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN184717[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN184717.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN184717.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN184717.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN184717[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN184717.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN184717.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN184717.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN184717[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN184717.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN184717.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN184717.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN184717[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN187051.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN187051.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN187051.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN187051[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN187051.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN187051.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN187051.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN187051[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN187051.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN187051.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN187051.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN187051[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN187051.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN187051.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN187051.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN187051[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN847059.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN847059[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN847059.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN847059.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN847059[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN847059.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN847059.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN847059[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN847059.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN847059.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN847059.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN847059[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN836649.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN836649[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN836649.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN836649[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN836649.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN836649[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN836649.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN836649.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN836649[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN849309.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN854450 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN854450.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN849309[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN854450.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN854450.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN854450.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN854450[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN594756.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN594756.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN594756[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN594756.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN594756[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN565527.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN565527[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN594756[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN589742.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN589742[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN599656.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN599656[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN601936.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN601936[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN607379[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN589459.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN589459[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN592733[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN589294.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN589294[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN591231.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN591231[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN591231.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN591231[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN603128.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN603128[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593981.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN593981[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573963[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593981.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573963 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573963.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN593981[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN622211.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN574523 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN574523.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN622211[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN574523.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN574523 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN574523.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN574523[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN590242 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN594756[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN591231 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN591231.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN590242[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN591231 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN591231.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN590242[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN590242 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN590242.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN600496[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN624419.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN575643 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN624419[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN575643 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN575643[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN575643 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN575643[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN158085.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN575643 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN158085[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN575643 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN575643[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN233699.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN575643 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN575643.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN233699[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN607379.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN607379[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN607379 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN560237[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN607379.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN607379[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN562455.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN607379 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN607379.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN562455[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN623551.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN575363 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN575363.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN623551[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN575363.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN575363 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN575363.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN575363[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN623117.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN623117[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN594756[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN594756[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN594756[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN594756[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN594756[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN594756[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN594756[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN594756[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN591231.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN591231[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN238829.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN238829[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN671434.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN671434[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN465109.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN465109[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN465109.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN465109[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN157511.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN157511[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN167939.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN167939[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN226445[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN574803[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN160133.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN574803.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN160133[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN589742 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN560237[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN589742 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN584725[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN562455.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN584725 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN584725.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN562455[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN561127 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN560237[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN238829.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN560237 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN238829[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN561127 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN560237[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN465109.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN560237 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN465109[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN561127 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN560237[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN465109.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN560237 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN465109[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN561127 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN560237[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1486331.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN560237 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1486331[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN561127 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN560237[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1486331.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN560237 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1486331[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN561127 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN560237[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1486331.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN560237 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN560237.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1486331[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN622664.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN574243 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN574243.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN622664[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN574243.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN574243 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN574243.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN574243[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN574243.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN574243 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN574243.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN574243[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN569969.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN574243 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN574243.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN569969[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN574243.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN574243 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN574243.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN574243[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN569969.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN574243 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN574243.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN569969[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN226368.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN226368.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN226368.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN226368[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN226368.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN226368 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN229379[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN226368.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN226368.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN226368.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN226368[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN226368.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN226368 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN229379[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN229379.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN229379[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN229379[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN229379.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN229379[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN229379[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN229379[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN229379[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN229379[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN229379.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN229379.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN229379.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN229379[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN204573.-1",
      "_method" : "---java.io.PipedReader.read@POLYN204573.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN204573.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN204573[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN204573.return",
      "_method" : "---java.io.PipedReader.read@POLYN204573 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN207173.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN207173[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN204573.ret",
      "_method" : "---java.io.PipedReader.read@POLYN204573.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN204573.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN204573[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN204573.return",
      "_method" : "---java.io.PipedReader.read@POLYN204573 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN207173.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN207173[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN368934.x",
      "_method" : "---java.io.PrintStream.print@POLYN364146 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN364146.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN368934[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN314138.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN368934 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN368934.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN314138[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN368934.x",
      "_method" : "---java.io.PrintStream.print@POLYN364146 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN364146.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN368934[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN190512.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN368934 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN368934.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN190512[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN368934.x",
      "_method" : "---java.io.PrintStream.print@POLYN364146 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN364146.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN368934[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN190512.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN368934 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN368934.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN190512[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN372101.x",
      "_method" : "---java.io.PrintStream.print@POLYN367652 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN372101.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN372101[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN156168.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN372101 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN372101.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN156168[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN372101.x",
      "_method" : "---java.io.PrintStream.print@POLYN367652 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN372101.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN372101[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN165808.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN372101 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN372101.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN165808[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN364061.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN344098 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN344098.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN364061[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN344098.c",
      "_method" : "---java.io.Writer.write@POLYN192632 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN192632.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN344098[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN347917.c",
      "_method" : "---java.io.PrintWriter.print@POLYN347917.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN347917.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN347917[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352629.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347917 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN347917.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN352629[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN345710.off",
      "_method" : "---java.io.Writer.write@POLYN194525 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN194525.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN345710[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN194525.off",
      "_method" : "---java.io.Writer.write@POLYN194525.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN194525.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN194525[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN311233.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN311233.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN311233[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN311233.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN315696 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN311233.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN311233[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN312316.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN312316 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN315696.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN315696[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN312316.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN312316.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN312316[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN323063.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN323063[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN324173.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN324173.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN324173[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN470735.address",
      "_method" : "---java.net.Socket.connect@POLYN474510 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN474510.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN470735[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN474510.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN475160 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN474510.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN474510[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN474510.0",
      "_method" : "---java.net.Socket.connect@POLYN475160 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN475160.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN474510[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN475160.timeout",
      "_method" : "---java.net.Socket.connect@POLYN475160 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN475160.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN475160[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN470735.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN471665 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN471665.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN470735[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN471665.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN471665.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN471665.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN471665[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN475160.true",
      "_method" : "---java.net.Socket.createImpl@POLYN471665 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN471665.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN475160[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN471665.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN471665.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN471665.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN471665[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN471665.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN471665.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN471665.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN471665[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN473992.true",
      "_method" : "---java.net.Socket.createImpl@POLYN471665 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN471665.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN473992[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.body",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.headers",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248928[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.statusCode",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN888369.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.b",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN875477[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.b",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN875477[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN807110.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN807110[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN888369.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.len",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN875477[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "159",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.len",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN875477[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN807110.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN807110[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN888369.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.off",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN875477[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN911647.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.off",
      "_method" : "---java.io.InputStream.read@POLYN248382 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN875477[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN875477.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN807110.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN891842.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN807110[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "162",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN243419.return",
      "_method" : "---java.io.InputStream.read@POLYN243419 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.workerState",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.dummymethode_00174 in line [00174]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234945.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN201161 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN235819.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN235819.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN235819.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN575083 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN593981.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593981.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN575083 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN634825 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN593981.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593981.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN637298.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN811515.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN894057 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN894057.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN811515[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN156289.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN811515 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811515.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN156289[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN156868.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN156289 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN156289.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN574803 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN168880[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN180000.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN180000 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN243279.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN243279.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN243279 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN243279.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN180000.offsets",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN180000.dummymethode_00182 in line [00182]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN180000.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN808796.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN808796 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN900824.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN900824[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN894844.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN894844 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN808796.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617580.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617802.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN613142.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571579.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571997.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN180532.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617580.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617802.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN613142.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571579.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571997.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN594756.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617580.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617802.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN613142.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604971.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571579.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_method" : "---java.io.OutputStream.write@POLYN180532 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571997.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN618518.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN204377.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523.value",
      "_method" : "---java.io.OutputStream.write@POLYN178740 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN178740.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN204377.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523.value",
      "_method" : "---java.io.OutputStream.write@POLYN178740 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN178740.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN205820.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523.value",
      "_method" : "---java.io.OutputStream.write@POLYN178740 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN178740.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN221523[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN298800.sensor"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625.prefix"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625.id"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625.metrics"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845.prefix"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845.id"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845.metrics"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845.nowMs"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R19",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R20",
    "_libelle" : "java.io.File.readObject@POLYN635538.s"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088.initialTopologies"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN489263.applicationConfig"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989.connName"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337887.partition"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337887.offsetResetStrategy"
  }, {
    "_id" : "R29",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111.connName"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111.config"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111.allowReplace"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111.callback"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111.configInfos"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN227130.connName"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN227130.callback"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN235440.request"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN235440.cb"
  }, {
    "_id" : "R40",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN232824.taskId"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN232824.cb"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN261368.cleanupDelayMs"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN258363.taskId"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN334539.tp"
  }, {
    "_id" : "R47",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN342724.tp"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN342875.tp"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN332972.tp"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN234237.connName"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN234237.cb"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R58",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R59",
    "_libelle" : "java.util.Hashtable.putAll@POLYN431736.t"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN577263.partitions"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN577263.logPrefix"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN578072.topics"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN578072.logPrefix"
  }, {
    "_id" : "R64",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R65",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R66",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R67",
    "_libelle" : "java.io.File.writeObject@POLYN635157.s"
  }, {
    "_id" : "R68",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R69",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN388890.s"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320931.assignments"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN165586.reader"
  }, {
    "_id" : "R73",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325986.tp"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325986.position"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325986.requestedResetStrategy"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN343427.tp"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R80",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1464395.f"
  }, {
    "_id" : "R81",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1559779.b"
  }, {
    "_id" : "R82",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R83",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162966.b"
  }, {
    "_id" : "R84",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162966.off"
  }, {
    "_id" : "R85",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162966.len"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN238966.builder"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082.partitions"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082.offsetResetStrategy"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN189472.key"
  }, {
    "_id" : "R93",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R94",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R95",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R96",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN222913.b"
  }, {
    "_id" : "R97",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN222913.off"
  }, {
    "_id" : "R98",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN222913.len"
  }, {
    "_id" : "R99",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1501001.r"
  }, {
    "_id" : "R100",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1501001.f"
  }, {
    "_id" : "R101",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1512678.r"
  }, {
    "_id" : "R102",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1512678.f"
  }, {
    "_id" : "R103",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1520332.f"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN325395.tp"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN325395.position"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN204183.reporters"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN328367.tp"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN328367.position"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN335277.tp"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN335277.highWatermark"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN335467.tp"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN335467.logStartOffset"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN335657.tp"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN335657.lastStableOffset"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN336097.tp"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN336097.preferredReadReplicaId"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN336097.timeMs"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN338646.partitions"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN338646.nextAllowResetTimeMs"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN343021.partitions"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN343021.nextRetryTimeMs"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN305075.reporter"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162918.status"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN162539.status"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN163606.status"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN163063.status"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN175988.configs"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN168052.reader"
  }, {
    "_id" : "R134",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162105.b"
  }, {
    "_id" : "R135",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R136",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R137",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R138",
    "_libelle" : "java.io.PipedReader.receive@POLYN203523.c"
  }, {
    "_id" : "R139",
    "_libelle" : "java.io.PipedReader.receive@POLYN203523.off"
  }, {
    "_id" : "R140",
    "_libelle" : "java.io.PipedReader.receive@POLYN203523.len"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN238584.key"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN238584.value"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN238584.windowStartTimestamp"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN193125.newCacheSizeBytes"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN261813.key"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN261813.value"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN261813.windowStartTimestamp"
  }, {
    "_id" : "R151",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN173051.snk"
  }, {
    "_id" : "R152",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221806.b"
  }, {
    "_id" : "R153",
    "_libelle" : "java.io.PipedWriter.connect@POLYN172281.snk"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN316788.pattern"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN316788.listener"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN153608.topics"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN166844.requestVersion"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN166844.response"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN166844.isPartialUpdate"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN166844.nowMs"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN170813.connector"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN171461.connector"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN171461.configs"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN172221.aclMutator"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN179155.snapshot"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN162026.force"
  }, {
    "_id" : "R175",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R176",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN203554.errorHandlingMetrics"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN489526.namedTopology"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN164031.topic"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN164031.nowMs"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN166072.lastVersion"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN166072.timeoutMs"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN167457.fatalException"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN148132.key"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN148132.value"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN304719.reporter"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN161983.entries"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN167805.newState"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN167805.now"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN225534.callback"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN225765.connName"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN225765.callback"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228198.connName"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228198.config"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228198.allowReplace"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228198.callback"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN231363.connName"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN231363.callback"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN169843.connector"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN169843.properties"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN170462.connector"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN172346.connector"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN172346.state"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN173171.listener"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN181870.partition"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN181870.offset"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN173728.acls"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN169343.newLeader"
  }, {
    "_id" : "R211",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R212",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN250825.readlimit"
  }, {
    "_id" : "R213",
    "_libelle" : "java.io.PipedReader.receive@POLYN201845.c"
  }, {
    "_id" : "R214",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN390943.exception"
  }, {
    "_id" : "R215",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN329497.fac"
  }, {
    "_id" : "R216",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN511510.fac"
  }, {
    "_id" : "R217",
    "_libelle" : "java.util.Hashtable.forEach@POLYN447252.action"
  }, {
    "_id" : "R218",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN448158.function"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN157015.committedOffsets"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN256426.activePartitionHostMap"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN256426.standbyPartitionHostMap"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN256426.clusterMetadata"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN202056.namespace"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN146770.position"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN150053.amount"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN168877", "S0:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN168877", "S0:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN170217", "S0:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN170217", "S0:org.apache.kafka.connect.runtime.Connect.stop@POLYN154958", "S0:org.apache.kafka.connect.runtime.Connect.stop@POLYN154958", "S0:org.apache.kafka.connect.runtime.ConnectMetrics.stop@POLYN224386", "S0:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S0:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625.dummymethode_00075" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN830730", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN830730", "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845 (R3 in line [00060],R12 in line [00060],R13 in line [00060],R14 in line [00060],R15 in line [00060])", "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845.dummymethode_00062" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN168877", "S2:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN168877", "S2:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN170217", "S2:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN170217", "S2:org.apache.kafka.connect.runtime.Connect.stop@POLYN154958", "S2:org.apache.kafka.connect.runtime.Connect.stop@POLYN154958", "S2:org.apache.kafka.connect.runtime.ConnectMetrics.stop@POLYN224386", "S2:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S2:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN166560", "S2:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN303937 (R2 in line [00558])", "S2:java.util.HashMap.remove@POLYN652498", "S2:java.util.HashMap.remove@POLYN652498.dummymethode_01064" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN168877", "S3:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN168877", "S3:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN170217", "S3:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN170217", "S3:org.apache.kafka.connect.runtime.Connect.stop@POLYN154958", "S3:org.apache.kafka.connect.runtime.Connect.stop@POLYN154958", "S3:org.apache.kafka.connect.runtime.ConnectMetrics.stop@POLYN224386", "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN164625.dummymethode_00075" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.streams.KafkaStreams.StreamStateListener.onChange@POLYN522452 (R7 in line [00662])", "S4:org.apache.kafka.streams.KafkaStreams.setState@POLYN508725 (R9 in line [00322])", "S4:org.apache.kafka.streams.KafkaStreams.setState@POLYN508725.dummymethode_00323" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425", "S5:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425", "S5:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588", "S5:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588", "S5:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481 (R8 in line [01039],R9 in line [01051])", "S5:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070 (R10 in line [01215])", "S5:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070.dummymethode_01214" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588", "S6:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481 (R8 in line [01039],R9 in line [01051])", "S6:org.apache.kafka.streams.KafkaStreams.start@POLYN553583 (R7 in line [01832])", "S6:org.apache.kafka.streams.KafkaStreams.start@POLYN553583.dummymethode_01832" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425", "S7:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425", "S7:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588", "S7:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588", "S7:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481 (R8 in line [01039],R9 in line [01051])", "S7:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481 (R8 in line [01039],R9 in line [01051])", "S7:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070 (R10 in line [01215])", "S7:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070.dummymethode_01214" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:java.lang.Throwable.writeObject@POLYN388890 (R68 in line [01002],R69 in line [01002])", "S8:java.lang.Throwable.getOurStackTrace@POLYN382921 (R68 in line [00834])", "S8:java.lang.Throwable.getOurStackTrace@POLYN382921.dummymethode_00839" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:java.lang.Throwable.addSuppressed@POLYN390943 (R68 in line [01070],R214 in line [01070])", "S9:java.lang.Throwable.addSuppressed@POLYN390943.dummymethode_01074" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN830730", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN830730", "S10:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845 (R3 in line [00060],R12 in line [00060],R13 in line [00060],R14 in line [00060],R15 in line [00060])", "S10:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845 (R3 in line [00060],R12 in line [00060],R13 in line [00060],R14 in line [00060],R15 in line [00060])", "S10:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN163845.dummymethode_00062" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN224617 (R16 in line [00105])", "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN224617 (R16 in line [00105])", "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN241239", "S11:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN465708", "S11:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN463495", "S11:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN462369", "S11:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN462369", "S11:org.apache.kafka.connect.runtime.Worker.stop@POLYN422999", "S11:org.apache.kafka.connect.runtime.Worker.stop@POLYN422999", "S11:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN496904 (R17 in line [01751])" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN224617 (R16 in line [00105])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN224617 (R16 in line [00105])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN241239", "S12:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN465708", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTasks@POLYN464762", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN463719", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN463719", "S12:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN223040 (R18 in line [00292])", "S12:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN223040.dummymethode_00296" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989 (R16 in line [00242],R25 in line [00242])", "S13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989 (R16 in line [00242],R25 in line [00242])", "S13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989.dummymethode_00245" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111 (R16 in line [00201],R31 in line [00201],R32 in line [00201],R33 in line [00201],R34 in line [00201],R35 in line [00201])", "S14:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229111.dummymethode_00208" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN227130 (R16 in line [00161],R36 in line [00161],R37 in line [00161])", "S15:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN227130.dummymethode_00165" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN235440 (R16 in line [00309],R38 in line [00309],R39 in line [00309])", "S16:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN164258", "S16:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN164258.dummymethode_00055" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN232824 (R16 in line [00274],R41 in line [00274],R42 in line [00274])", "S17:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN232824.dummymethode_00276" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN234237 (R16 in line [00291],R51 in line [00291],R52 in line [00291])", "S18:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN234237.dummymethode_00293" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN225534 (R16 in line [00133],R192 in line [00133])", "S19:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN225765 (R16 in line [00138],R193 in line [00138],R194 in line [00138])", "S20:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN225765.dummymethode_00141" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228198 (R16 in line [00181],R195 in line [00181],R196 in line [00181],R197 in line [00181],R198 in line [00181])", "S21:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228198.dummymethode_00186" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN231363 (R16 in line [00251],R199 in line [00251],R200 in line [00251])", "S22:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN231363.dummymethode_00253" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223790", "S23:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088 (R21 in line [00104],R22 in line [00104])", "S23:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088 (R21 in line [00104],R22 in line [00104])", "S23:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN226928", "S23:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN226928.dummymethode_00170" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223790", "S24:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088 (R21 in line [00104],R22 in line [00104])", "S24:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088 (R21 in line [00104],R22 in line [00104])", "S24:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN226928", "S24:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN252198", "S24:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN256049", "S24:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN489937 (R23 in line [00412])", "S24:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN489937.dummymethode_00413" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223790", "S25:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088 (R21 in line [00104],R22 in line [00104])", "S25:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088 (R21 in line [00104],R22 in line [00104])", "S25:org.apache.kafka.streams.KafkaStreams.start@POLYN553583 (R7 in line [01832])", "S25:org.apache.kafka.streams.KafkaStreams.start@POLYN553583.dummymethode_01832" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989 (R16 in line [00242],R25 in line [00242])", "S26:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989 (R16 in line [00242],R25 in line [00242])", "S26:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN241719", "S26:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN203524", "S26:org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN160976", "S26:org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN162576", "S26:org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN162576", "S26:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN223040 (R18 in line [00292])", "S26:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN223040.dummymethode_00296" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989 (R16 in line [00242],R25 in line [00242])", "S27:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230989 (R16 in line [00242],R25 in line [00242])", "S27:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN241719", "S27:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN241239", "S27:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN465708", "S27:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN463495", "S27:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN462369", "S27:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN462369", "S27:org.apache.kafka.connect.runtime.Worker.stop@POLYN422999", "S27:org.apache.kafka.connect.runtime.Worker.stop@POLYN422999", "S27:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN496904 (R17 in line [01751])" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856589", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN859065", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN859065", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN860962", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN913598", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN340520 (R26 in line [00695])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338498", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337887 (R26 in line [00636],R27 in line [00636],R28 in line [00636])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S28:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S28:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN905196", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN905196", "S29:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN334539 (R26 in line [00561],R46 in line [00561])", "S29:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S29:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S29:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN896039", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN896039", "S30:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN342724 (R26 in line [00737],R48 in line [00737])", "S30:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S30:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S30:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN896797", "S31:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN896797", "S31:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN342875 (R26 in line [00741],R49 in line [00741])", "S31:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S31:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S31:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN157809", "S32:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN332972 (R26 in line [00529],R50 in line [00529])", "S32:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S32:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S32:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320931 (R26 in line [00273],R70 in line [00273])", "S33:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320931.dummymethode_00277" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325986 (R26 in line [00390],R74 in line [00390],R75 in line [00390],R76 in line [00390])", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN325241", "S34:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S34:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN343427 (R26 in line [00755],R77 in line [00755])", "S35:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN172467", "S35:java.util.HashMap.HashIterator.remove@POLYN676602", "S35:java.util.HashMap.HashIterator.remove@POLYN676602.dummymethode_01445" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082 (R26 in line [00640],R90 in line [00640],R91 in line [00640])", "S36:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082.dummymethode_00641" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN325585", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN325395 (R26 in line [00378],R104 in line [00378],R105 in line [00378])", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S37:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S37:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN328367 (R26 in line [00443],R108 in line [00443],R109 in line [00443])", "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S38:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S38:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN335277 (R26 in line [00576],R110 in line [00576],R111 in line [00576])", "S39:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S39:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S39:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN335467 (R26 in line [00580],R112 in line [00580],R113 in line [00580])", "S40:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S40:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S40:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN335657 (R26 in line [00584],R114 in line [00584],R115 in line [00584])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S41:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S41:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN336097 (R26 in line [00596],R116 in line [00596],R117 in line [00596],R118 in line [00596])", "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S42:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S42:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN338646 (R26 in line [00651],R119 in line [00651],R120 in line [00651])", "S43:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN324876", "S43:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S43:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN343021 (R26 in line [00745],R121 in line [00745],R122 in line [00745])", "S44:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN325241", "S44:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S44:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN849938", "S45:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN316788 (R26 in line [00172],R154 in line [00172],R155 in line [00172])", "S45:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN321832", "S45:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN321832.dummymethode_00292" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN261368 (R43 in line [00001],R44 in line [00001])", "S46:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN261663", "S46:org.apache.kafka.common.utils.Utils.delete@POLYN447117", "S46:org.apache.kafka.common.utils.Utils.delete@POLYN447117.dummymethode_00852" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN261368 (R43 in line [00001],R44 in line [00001])", "S47:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN261663", "S47:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN261663", "S47:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN258363 (R43 in line [00001],R45 in line [00001])", "S47:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN258363.dummymethode_00001" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN257158 (R43 in line [00001])", "S48:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN252218 (R53 in line [00001])", "S48:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN252218.dummymethode_00001" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN261368 (R43 in line [00001],R44 in line [00001])", "S49:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN261663", "S49:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN261663", "S49:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN258363 (R43 in line [00001],R45 in line [00001])", "S49:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN258363 (R43 in line [00001],R45 in line [00001])", "S49:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN258363.dummymethode_00001" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.tools.ClientCompatibilityTest.main@POLYN231520", "S50:org.apache.kafka.tools.ClientCompatibilityTest.run@POLYN238450", "S50:org.apache.kafka.tools.ClientCompatibilityTest.testProduce@POLYN238737", "S50:java.io.BufferedOutputStream.flush@POLYN164001 (R82 in line [00139])", "S50:java.io.BufferedOutputStream.flushBuffer@POLYN161670", "S50:java.io.BufferedOutputStream.write@POLYN162966 (R82 in line [00116],R83 in line [00116],R84 in line [00116],R85 in line [00116])", "S50:java.io.BufferedOutputStream.write@POLYN162966 (R82 in line [00116],R83 in line [00116],R84 in line [00116],R85 in line [00116])", "S50:java.io.BufferedOutputStream.write@POLYN162966.dummymethode_00123" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:java.io.BufferedOutputStream.write@POLYN162105 (R82 in line [00093],R134 in line [00093])", "S51:java.io.BufferedOutputStream.flushBuffer@POLYN161670", "S51:java.io.BufferedOutputStream.write@POLYN162966 (R82 in line [00116],R83 in line [00116],R84 in line [00116],R85 in line [00116])", "S51:java.io.BufferedOutputStream.write@POLYN162966 (R82 in line [00116],R83 in line [00116],R84 in line [00116],R85 in line [00116])", "S51:java.io.BufferedOutputStream.write@POLYN162966.dummymethode_00123" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN190464 (R57 in line [00256])", "S52:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN188190", "S52:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN303937 (R2 in line [00558])", "S52:java.util.HashMap.remove@POLYN652498", "S52:java.util.HashMap.remove@POLYN652498.dummymethode_01064" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN189472 (R57 in line [00235],R92 in line [00235])", "S53:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN189472.dummymethode_00237" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.image.ConfigurationsImage.configProperties@POLYN153894", "S54:org.apache.kafka.image.ConfigurationsImage.configProperties@POLYN153894", "S54:org.apache.kafka.image.ConfigurationImage.toProperties@POLYN155437", "S54:java.util.Hashtable.putAll@POLYN431736 (R58 in line [00536],R59 in line [00536])", "S54:java.util.Hashtable.put@POLYN428262 (R58 in line [00471])", "S54:java.util.Hashtable.put@POLYN428262.dummymethode_00478" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:java.util.Hashtable.forEach@POLYN447252 (R58 in line [00888],R217 in line [00888])", "S55:java.util.Hashtable.forEach@POLYN447252.dummymethode_00889" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:java.util.Hashtable.replaceAll@POLYN448158 (R58 in line [00908],R218 in line [00908])", "S56:java.util.Hashtable.replaceAll@POLYN448158.dummymethode_00909" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:java.net.Socket.Socket@POLYN470735", "S57:java.net.Socket.close@POLYN506312 (R65 in line [00001],R66 in line [00001])", "S57:java.net.Socket.close@POLYN506312 (R65 in line [00001],R66 in line [00001])", "S57:java.net.Socket.close@POLYN506312.dummymethode_00001" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:java.net.Socket.setSocketImplFactory@POLYN511510 (R65 in line [00001],R216 in line [00001])", "S58:java.net.Socket.setSocketImplFactory@POLYN511510.dummymethode_00001" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN165586 (R71 in line [00076],R72 in line [00076])", "S59:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN165586.dummymethode_00078" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN168052 (R71 in line [00139],R133 in line [00139])", "S60:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN168052.dummymethode_00141" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN169343 (R71 in line [00169],R210 in line [00169])", "S61:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN169343 (R71 in line [00169],R210 in line [00169])", "S61:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN169343.dummymethode_00173" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN165586 (R71 in line [00076],R72 in line [00076])", "S62:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN165586 (R71 in line [00076],R72 in line [00076])", "S62:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN165586.dummymethode_00078" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325986 (R26 in line [00390],R74 in line [00390],R75 in line [00390],R76 in line [00390])", "S63:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325986 (R26 in line [00390],R74 in line [00390],R75 in line [00390],R76 in line [00390])", "S63:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN325241", "S63:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667", "S63:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN174667.dummymethode_00114" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082 (R26 in line [00640],R90 in line [00640],R91 in line [00640])", "S64:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082 (R26 in line [00640],R90 in line [00640],R91 in line [00640])", "S64:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082.dummymethode_00641" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082 (R26 in line [00640],R90 in line [00640],R91 in line [00640])", "S65:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN338082 (R26 in line [00640],R90 in line [00640],R91 in line [00640])", "S65:java.io.InputStream.reset@POLYN255682 (R29 in line [00350])" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN189472 (R57 in line [00235],R92 in line [00235])", "S66:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN189472 (R57 in line [00235],R92 in line [00235])", "S66:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN189472.dummymethode_00237" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162918 (R125 in line [00071],R126 in line [00071])", "S67:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN162539 (R125 in line [00063],R127 in line [00063])", "S67:java.util.HashMap.remove@POLYN652498", "S67:java.util.HashMap.remove@POLYN652498.dummymethode_01064" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN163606 (R125 in line [00084],R128 in line [00084])", "S68:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN163063 (R125 in line [00076],R129 in line [00076])", "S68:org.apache.kafka.connect.util.Table.remove@POLYN151319", "S68:org.apache.kafka.connect.util.Table.remove@POLYN151319.dummymethode_00046" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN168052 (R71 in line [00139],R133 in line [00139])", "S69:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN168052 (R71 in line [00139],R133 in line [00139])", "S69:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN168052.dummymethode_00141" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN193125 (R145 in line [00075],R146 in line [00075])", "S70:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN193125.dummymethode_00077" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN202056 (R145 in line [00254],R226 in line [00254])", "S71:java.util.Hashtable.remove@POLYN478592" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN193125 (R145 in line [00075],R146 in line [00075])", "S72:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN193125 (R145 in line [00075],R146 in line [00075])", "S72:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN193125.dummymethode_00077" ]
  } ],
  "_lesDeadlocksTypos" : [ {
    "_typo" : "No 1",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "R7",
    "_c2" : "R9",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.StreamStateListener.onChange@POLYN522452/line[00662]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "2",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.setState@POLYN508725/line[00322]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.setState@POLYN508725.dummymethode_00323"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070/line[01215]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S5 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070.dummymethode_01214"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "2",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.start@POLYN553583/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.start@POLYN553583.dummymethode_01832"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN517425"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN515588"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN539481/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070/line[01215]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN549070.dummymethode_01214"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223790"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN224088/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.KafkaStreams.start@POLYN553583/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S25 org.apache.kafka.streams.KafkaStreams.start@POLYN553583.dummymethode_01832"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  } ]
}