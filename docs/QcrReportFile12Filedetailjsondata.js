{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN234553.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN242680[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN242680[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN242680[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN242680[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN242680[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245867.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN245867[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN249846.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN431477.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN427943 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN431477.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.dummymethode_00102 in line [00102]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.result",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.result",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.dummymethode_00106 in line [00106]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN431477.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN431477 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN245867.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245867 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN184205.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN184205[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN184205.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN431477 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN431477.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN242680[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN242680[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN242680[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN242680[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242680.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN242680[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN242680.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242680 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245867.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN245867[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN246195.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN246195.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN246195.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN246195.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN246195.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN431477.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN427943 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN431477.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.dummymethode_00102 in line [00102]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.result",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.result",
      "_method" : "---org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.dummymethode_00106 in line [00106]",
      "_target" : "org.apache.kafka.common.TopicPartitionInfo.hashCode@POLYN162042.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN431477.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN431477 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN245867.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245867 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN184205.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN184205[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN184205.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN431477 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN431477.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN250014.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN250014.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN250014[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN250014.i",
      "_method" : "---java.io.InputStream.read@POLYN250014.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN250014.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN250014[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN876578.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN876578 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889500.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN808210.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN808210 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN250014.return",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN876171[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN876578.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN876578.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN876578.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN876578.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN876578.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889500.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889500 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN808210.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN897149 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN810973.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN369286.s",
      "_method" : "---java.io.PrintStream.write@POLYN364095 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN364095.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN369286[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN916186.return",
      "_method" : "---java.lang.String.valueOf@POLYN916186 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN374256.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN374256.s",
      "_method" : "---java.io.PrintStream.print@POLYN369286 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN369286.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN374256[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN364095.s",
      "_method" : "---java.io.PrintWriter.write@POLYN348022 in line [00525]",
      "_target" : "java.io.PrintStream.write@POLYN364095.cibledummy_00525",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.Double.toString@POLYN379078.d",
      "_method" : "---java.lang.Double.toString@POLYN379078.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN379078.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.valueOf@POLYN916186.d",
      "_method" : "---java.lang.Double.toString@POLYN379078 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN379078.d",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.Double.toString@POLYN379078.return",
      "_method" : "---java.lang.Double.toString@POLYN379078 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN916186.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.getValue@POLYN438660.return",
      "_method" : "---java.util.Map.getValue@POLYN438660 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN204552.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN204552.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN916186 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN916186.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN570142.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN570142.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN570142.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN570142.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN570142 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN604764 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN606607 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN564747.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN564747.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN596392[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN603572.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN603572.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN603572[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN603572.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN603572.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN603572[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN604764 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN604764.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN604764[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN564747.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN564747.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN603572.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN603572.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN603572[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN603572.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN603572.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN603572[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN604764 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN604764.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN604764[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN564091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN564091[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN591878 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN596392[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN591878[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN572612 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN572612.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN290267.return",
      "_method" : "---java.lang.Object.getClass@POLYN290267 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN596392 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN596392.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN591878 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN596392[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN591878[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN572612 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN572612.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN596392 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN596392.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.lang.Class.newInstance@POLYN1082751.return",
      "_method" : "---java.lang.Class.newInstance@POLYN1082751 in line [01897]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN844359.array",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN844359.array",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN844359.dummymethode_01940 in line [01940]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN844359.return",
      "_risk" : "//QC-JAVCWE099[01940] In java.io.ObjectInputStream.readArray@POLYN844359[01940] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.Class.reflectionFactory",
      "_method" : "---java.lang.Class.getReflectionFactory@POLYN1201431.dummymethode_03891 in line [03891]",
      "_target" : "java.lang.Class.getReflectionFactory@POLYN1201431.factory",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.Class.getReflectionFactory@POLYN1201431.factory",
      "_method" : "---java.lang.Class.getReflectionFactory@POLYN1201431.dummymethode_03893 in line [03893]",
      "_target" : "java.lang.Class.getReflectionFactory@POLYN1201431.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.Class.getReflectionFactory@POLYN1201431.return",
      "_method" : "---java.lang.Class.getReflectionFactory@POLYN1201431 in line [00685]",
      "_target" : "java.lang.Class.newInstance@POLYN1082751.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN844359.return",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN844359 in line [00044]",
      "_target" : "org.apache.kafka.raft.internals.StringSerde.read@POLYN149694.cibledummy_00044",
      "_risk" : "//QC-JAVCWE099[00044] In org.apache.kafka.raft.internals.StringSerde.read@POLYN149694[00044] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN380451.l",
      "_method" : "---java.lang.String.format@POLYN910245 in line [01027]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN364034.l",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00964]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN192860.\"%s",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00208]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN192860.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00212]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN428944.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00293]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN197672.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00096]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN245792.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00314]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353809.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349054 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN349054.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN353809[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN910245.l",
      "_method" : "---java.lang.String.format@POLYN910245.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN910245.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN910245.return",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101.data",
      "_method" : "---java.io.PrintWriter.println@POLYN353809 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN353809.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN154101[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN237857.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN910245 in line [00112]",
      "_target" : "java.lang.String.format@POLYN910245.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN236194.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN236194.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN236194.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN236194[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.toArray@POLYN421227.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.toArray@POLYN421227 in line [00104]",
      "_target" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeByteBuffer@POLYN160606.bytes",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeByteBuffer@POLYN160606.bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN236194 in line [00105]",
      "_target" : "java.io.FileOutputStream.write@POLYN236194.b",
      "_risk" : "//QC-JAVCWE099[00105] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeByteBuffer@POLYN160606[00105] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.toArray@POLYN421227.dest",
      "_method" : "---org.apache.kafka.common.utils.Utils.toArray@POLYN421227.dummymethode_00293 in line [00293]",
      "_target" : "org.apache.kafka.common.utils.Utils.toArray@POLYN421227.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN250014.0",
      "_method" : "---java.io.InputStream.read@POLYN250014.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN250014.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN250014[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN250014.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN459161[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN250014.return",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN459161[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN459161.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN250014.-1",
      "_method" : "---java.io.InputStream.read@POLYN250014.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN250014.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN250014[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN250014.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN459161[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN250014.return",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN459161[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN459161.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN250014.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN459161[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN459161[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN459161.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN457895.destinationBuffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN459161 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN459161.destinationBuffer",
      "_risk" : ""
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN795130.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN795130.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN854165.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN854165.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN854165[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN854165.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN854165.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN854165[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN856092.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN856092.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN856092[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN577571 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN577571.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN577571.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN577571 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN577571.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN577571[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN595617.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN583009.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN595617 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN595617.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN583009[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN368822.s",
      "_method" : "---java.io.PrintStream.write@POLYN363177 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN363177.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN368822[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN373277.x",
      "_method" : "---java.io.PrintStream.print@POLYN368822 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN368822.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN373277[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN363177.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN347030 in line [00503]",
      "_target" : "java.io.PrintWriter.write@POLYN347030.buf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN363177[00503] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintWriter.write@POLYN347030.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN347030.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN347030.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN347030[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN246855.b",
      "_method" : "---java.io.InputStream.read@POLYN246855.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN246855.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN246855[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN303412.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN303412 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN305094.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN303412.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN246855 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN246855.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN303412[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN246855.return",
      "_method" : "---java.io.InputStream.read@POLYN246855 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN303412.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN303412[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN244033.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN244033[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN242437[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN241832[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN242437 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN244504.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN244504[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN242437[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN241832[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN242437 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN244276.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN244276[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN242437[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN241832[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN242437 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN244747.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN244747[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN242437[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN241832[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN242437 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN242437[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN241832[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN244981.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN244981[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN242437.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN242437 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.cbuf",
      "_method" : "---java.io.Reader.read@POLYN187957 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN237521[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN237521 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN240727[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN240727.n",
      "_method" : "---java.io.BufferedReader.read@POLYN240727.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN240727[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.len",
      "_method" : "---java.io.Reader.read@POLYN187957 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN237521[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN237521 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN240727[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN240727.n",
      "_method" : "---java.io.BufferedReader.read@POLYN240727.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN240727[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.off",
      "_method" : "---java.io.Reader.read@POLYN187957 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN237521[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN237521 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN240727[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN240727.n",
      "_method" : "---java.io.BufferedReader.read@POLYN240727.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN240727[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN187957.return",
      "_method" : "---java.io.Reader.read@POLYN187957 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN237521[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN237521 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN240727[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN240727.n",
      "_method" : "---java.io.BufferedReader.read@POLYN240727.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN240727[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN237521.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN237521[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN237521.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN237521 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN240727[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN240727.n",
      "_method" : "---java.io.BufferedReader.read@POLYN240727.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN240727.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN240727[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN864540.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN864540 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN796573.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN796573.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN796573 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN796573.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN796573[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN796573.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN796573.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN796573.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN796573[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN796573.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN864540 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN796573.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN796573.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN796573 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN796573.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN796573[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN796573.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN796573.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN796573.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN796573[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN807783.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN807783.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN807783.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN807783[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN807783.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN807783 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN841119.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN841119[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN841119.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN841119.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN841119.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN841119[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN836826.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN836826.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN836826.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN836826[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN836826.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN836826 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN850951.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN850951[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN850951.desc",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN854165 in line [02025]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN850951.cibledummy_02025",
      "_risk" : "//QC-JAVCWZ099[02025] In java.io.ObjectInputStream.readOrdinaryObject@POLYN850951[02025] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN186694.return",
      "_method" : "---java.io.Reader.read@POLYN186694 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN185702.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN185702[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN185702.n",
      "_method" : "---java.io.Reader.read@POLYN185702.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN185702.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN185702[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN186694.-1",
      "_method" : "---java.io.Reader.read@POLYN186694.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN186694.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN186694[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN321834.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN321834.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN321834.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN321834[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN321834.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN321834.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN321834.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN321834[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN321834.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN321834 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN322778.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN322778[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObjectOverride@POLYN792461.return",
      "_method" : "---java.io.ObjectInputStream.readObjectOverride@POLYN792461 in line [00416]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN791044.return",
      "_risk" : "//QC-JAVCWE099[00416] In java.io.ObjectInputStream.readObject@POLYN791044[00416] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObjectOverride@POLYN792461.null",
      "_method" : "---java.io.ObjectInputStream.readObjectOverride@POLYN792461.dummymethode_00460 in line [00460]",
      "_target" : "java.io.ObjectInputStream.readObjectOverride@POLYN792461.return",
      "_risk" : "//QC-JAVCWE099[00460] In java.io.ObjectInputStream.readObjectOverride@POLYN792461[00460] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN791044.return",
      "_method" : "---java.io.ObjectInputStream.readObject@POLYN791044 in line [00209]",
      "_target" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN211664.resp",
      "_risk" : "//QC-JAVCWE099[00209] In org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN211664[00209] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN828556.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN828556 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN791044.obj",
      "_risk" : "//QC-JAVCWE099[00422] In java.io.ObjectInputStream.readObject@POLYN791044[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN791044.obj",
      "_method" : "---java.io.ObjectInputStream.readObject@POLYN791044.dummymethode_00431 in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN791044.return",
      "_risk" : "//QC-JAVCWE099[00431] In java.io.ObjectInputStream.readObject@POLYN791044[00431] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN791044.return",
      "_method" : "---java.io.ObjectInputStream.readObject@POLYN791044 in line [00209]",
      "_target" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN211664.resp",
      "_risk" : "//QC-JAVCWE099[00209] In org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN211664[00209] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN244033.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN244033[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN242437.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN242437[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN241832.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN241832.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN241832.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN241832[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "0",
      "_method" : "---java.io.BufferedInputStream.read@POLYN248502.dummymethode_00343 in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN248502.n",
      "_risk" : "//QC-JAVCWE099[00343] In java.io.BufferedInputStream.read@POLYN248502[00343] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN248502.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN248502.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN248502.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN248502[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN248502.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN248502.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN248502.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN248502[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN248502.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN248502.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN248502.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN248502[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN163304.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN163304[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN164600.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN164600[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN164600.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN164600[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN362391.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN362391[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN163304.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN163304[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN164600.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN164600[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN164600.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN164600[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN362391.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN362391[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN163304.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN163304[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN164600.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN164600[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN164600.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN164600[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN362391.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN164600 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN164600.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN362391[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN196157.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN196157.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN196157[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN196157.cbuf",
      "_method" : "---java.io.Writer.write@POLYN195323 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN195323.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN196157[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN347344.len",
      "_method" : "---java.io.Writer.write@POLYN196157 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN196157.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN347344[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN196157.len",
      "_method" : "---java.io.Writer.write@POLYN195323 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN195323.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN196157[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN186351.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN186351.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN186351.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN186351[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN186351.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN186351.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN186351.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN186351[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN186351.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN186351.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN186351.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN186351[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN186351.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN186351.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN186351.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN186351[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN188685.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN188685.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN188685.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN188685[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN188685.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN188685.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN188685.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN188685[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN188685.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN188685.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN188685.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN188685[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN188685.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN188685.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN188685.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN188685[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN843390.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN843390 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN848701.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN848701[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN843390.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN843390.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN843390.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN843390[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN848701.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN848701.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN848701[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN848701.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN848701.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN848701.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN848701[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN848701.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN848701.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN848701.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN848701[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN848701.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN848701.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN848701.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN848701[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN838289.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN838289.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN838289.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN838289.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN850951.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN856092 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN856092.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN850951[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN856092.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN856092.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN856092.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN856092[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN596392.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN596392.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN596392[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN596392.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN596392[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN567163.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN567163[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN596392[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN591378.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN591378[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN601292.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN601292[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN603572.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN603572[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN609015[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN591095.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN591095[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN594369[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN590930.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN590930[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN592867.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN592867[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN592867.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN592867[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN604764.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN604764[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN595617.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN595617[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN575599[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN595617.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN575599 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN575599.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN595617[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN623851.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN576159 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN576159.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN623851[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN576159.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN576159 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN576159.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN576159[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN591878 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN596392[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN592867 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN592867.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN591878[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN592867 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN592867.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN591878[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN591878 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN591878.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN602132[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN626059.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN577279 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN626059[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN577279 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN577279[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN577279 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN577279[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN159717.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN577279 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN159717[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN577279 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN577279[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN235331.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN577279 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN577279.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN235331[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN609015.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN609015[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN609015 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN561873[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN609015.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN609015[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN564091.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN609015 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN609015.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN564091[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN625191.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN576999 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN576999.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN625191[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN576999.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN576999 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN576999.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN576999[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN624757.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN624757[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN596392[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN596392[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN596392[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN596392[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN596392[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN596392[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN596392[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN596392[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN592867.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN592867[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN240463.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN240463[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN673074.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN673074[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN466749.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN466749[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN466749.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN466749[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN159143.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN159143[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN169571.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN169571[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN576439[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN161765.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN576439.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN161765[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN591378 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN561873[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN591378 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN586361[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN564091.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN586361 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN586361.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN564091[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN697743.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN697743[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN697743.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN697743[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN466749.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN466749[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN466749.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN466749[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1487967.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1487967[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1487967.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1487967[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN562763 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN561873[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1487967.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN561873 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN561873.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1487967[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN624304.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN575879 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN575879.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN624304[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN575879.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN575879 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN575879.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN575879[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN575879.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN575879 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN575879.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN575879[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN571605.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN575879 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN575879.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN571605[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN575879.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN575879 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN575879.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN575879[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN571605.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN575879 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN575879.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN571605[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN228002.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN228002.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN228002.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN228002[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN228002.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN228002 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN231013[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN228002.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN228002.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN228002.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN228002[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN228002.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN228002 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN231013[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN231013.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN231013[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN231013[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN231013.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN231013[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN231013[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN231013[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN231013[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN231013[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN231013.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN231013.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN231013.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN231013[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN206207.-1",
      "_method" : "---java.io.PipedReader.read@POLYN206207.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN206207.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN206207[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN206207.return",
      "_method" : "---java.io.PipedReader.read@POLYN206207 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN208807.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN208807[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN206207.ret",
      "_method" : "---java.io.PipedReader.read@POLYN206207.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN206207.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN206207[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN206207.return",
      "_method" : "---java.io.PipedReader.read@POLYN206207 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN208807.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN208807[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN370568.x",
      "_method" : "---java.io.PrintStream.print@POLYN365780 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN365780.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN370568[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN315780.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN370568 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN370568.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN315780[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN370568.x",
      "_method" : "---java.io.PrintStream.print@POLYN365780 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN365780.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN370568[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN192144.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN370568 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN370568.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN192144[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN370568.x",
      "_method" : "---java.io.PrintStream.print@POLYN365780 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN365780.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN370568[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN192144.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN370568 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN370568.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN192144[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN373735.x",
      "_method" : "---java.io.PrintStream.print@POLYN369286 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN373735.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN373735[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN157800.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN373735 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN373735.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN157800[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN373735.x",
      "_method" : "---java.io.PrintStream.print@POLYN369286 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN373735.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN373735[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN167440.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN373735 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN373735.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN167440[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN365695.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN345732 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN345732.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN365695[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN345732.c",
      "_method" : "---java.io.Writer.write@POLYN194264 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN194264.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN345732[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN349551.c",
      "_method" : "---java.io.PrintWriter.print@POLYN349551.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN349551.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN349551[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN354263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349551 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN349551.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN354263[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.newLine@POLYN348214.lineSeparator",
      "_method" : "---java.io.Writer.write@POLYN195564 in line [00480]",
      "_target" : "java.io.Writer.write@POLYN195564.str",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintWriter.newLine@POLYN348214[00480] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN195564.str",
      "_method" : "---java.io.Writer.write@POLYN196157 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN195564.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN195564[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN195564.str",
      "_method" : "---java.io.Writer.write@POLYN196157 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN195564.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN195564[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.message.CodeBuffer.write@POLYN152458.line",
      "_method" : "---java.io.Writer.write@POLYN195564 in line [00050]",
      "_target" : "java.io.Writer.write@POLYN195564.str",
      "_risk" : "//QC-JAVCWE099[00050] In org.apache.kafka.message.CodeBuffer.write@POLYN152458[00050] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN347344.off",
      "_method" : "---java.io.Writer.write@POLYN196157 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN196157.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN347344[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN196157.off",
      "_method" : "---java.io.Writer.write@POLYN196157.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN196157.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN196157[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN312865.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN312865.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN312865[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN312865.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN317328 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN312865.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN312865[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN313948.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN313948 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN317328.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN317328[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN313948.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN313948.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN313948[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN324695.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN324695[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN325805.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN325805.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN325805[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN472367.address",
      "_method" : "---java.net.Socket.connect@POLYN476142 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN476142.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN472367[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN476142.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN476792 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN476142.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN476142[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN476142.0",
      "_method" : "---java.net.Socket.connect@POLYN476792 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN476792.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN476142[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN476792.timeout",
      "_method" : "---java.net.Socket.connect@POLYN476792 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN476792.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN476792[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN472367.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN473297 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN473297.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN472367[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN473297.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN473297.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN473297.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN473297[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN476792.true",
      "_method" : "---java.net.Socket.createImpl@POLYN473297 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN473297.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN476792[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN473297.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN473297.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN473297.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN473297[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN473297.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN473297.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN473297.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN473297[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN475624.true",
      "_method" : "---java.net.Socket.createImpl@POLYN473297 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN473297.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN475624[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.body",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.headers",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN250562[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.statusCode",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890021.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.b",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN877125[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.b",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN877125[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN808744.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN808744[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890021.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.len",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN877125[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.len",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN877125[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN808744.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN808744[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890021.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.off",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN877125[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.off",
      "_method" : "---java.io.InputStream.read@POLYN250014 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN877125[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN877125.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN808744.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893496.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN808744[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN245051.return",
      "_method" : "---java.io.InputStream.read@POLYN245051 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN236579.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN236579.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN236579.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN236579.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN236579.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN202793 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN237455.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN237455.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN237455.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "159",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN239918.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN239918 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN815223.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN815223 in line [01751]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.ifaces[i]",
      "_risk" : "//QC-JAVCWZ099[01751] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01751] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN815223.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.toString@POLYN239918.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN239918.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN239918.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN239918.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN239918 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN815223.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN815223 in line [01751]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.ifaces[i]",
      "_risk" : "//QC-JAVCWZ099[01751] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01751] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044 in line [00001]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN815223.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.toString@POLYN239918.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN239918.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN239918.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN239918.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN239918 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN913301.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN815223.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN815223 in line [01751]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN838289.ifaces[i]",
      "_risk" : "//QC-JAVCWZ099[01751] In java.io.ObjectInputStream.readProxyDesc@POLYN838289[01751] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN902044 in line [00001]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN815223.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.toString@POLYN239918.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN239918.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN239918.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "162",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN576719 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN595617.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN595617.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN576719 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN636465 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN595617.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN595617.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN638938.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN813149.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN895711 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN895711.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN813149[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN157921.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN813149 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN813149.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN157921[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN158500.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN157921 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN157921.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN576439 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN170512[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN810430.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN810430 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN902478.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN902478[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN896498.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN896498 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN810430.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN619220.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN619442.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN614780.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN573215.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN573633.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN182164.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN619220.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN619442.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN614780.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN573215.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN573633.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN596392.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN619220.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN619442.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN614780.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN606607.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN573215.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_method" : "---java.io.OutputStream.write@POLYN182164 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN573633.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN620158.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN352057.s",
      "_method" : "---java.io.PrintWriter.write@POLYN347030 in line [00587]",
      "_target" : "java.io.PrintWriter.print@POLYN352057.cibledummy_00587",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN352057[00587] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN356581.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352057 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN352057.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN356581[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.write@POLYN613224.objVals[i]",
      "_method" : "---java.util.HashMap.writeObject@POLYN673074 in line [01687]",
      "_target" : "java.util.HashMap.writeObject@POLYN673074.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN673074.s",
      "_method" : "---java.util.HashMap.internalWriteEntries@POLYN697743 in line [01360]",
      "_target" : "java.util.HashMap.internalWriteEntries@POLYN697743.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN206011.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155.value",
      "_method" : "---java.io.OutputStream.write@POLYN180372 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN180372.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN206011.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155.value",
      "_method" : "---java.io.OutputStream.write@POLYN180372 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN180372.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN207454.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155.value",
      "_method" : "---java.io.OutputStream.write@POLYN180372 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN180372.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN223155[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN181632.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN181632 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN244911.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN244911.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN244911 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN244911.cibledummy_00235",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN300432.sensor"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257.prefix"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257.id"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257.metrics"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477.prefix"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477.id"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477.metrics"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477.nowMs"
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
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623.connName"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339521.partition"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339521.offsetResetStrategy"
  }, {
    "_id" : "R23",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745.connName"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745.config"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745.allowReplace"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745.callback"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745.configInfos"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN228764.connName"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN228764.callback"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN237074.request"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN237074.cb"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN234458.taskId"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN234458.cb"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN263000.cleanupDelayMs"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN259995.taskId"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225722.initialTopologies"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN490903.applicationConfig"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN336173.tp"
  }, {
    "_id" : "R44",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R45",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R46",
    "_libelle" : "java.io.File.readObject@POLYN637170.s"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN344358.tp"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN344509.tp"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN334606.tp"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN235871.connName"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN235871.cb"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R56",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R57",
    "_libelle" : "java.util.Hashtable.putAll@POLYN433370.t"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN578911.partitions"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN578911.logPrefix"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN579720.topics"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN579720.logPrefix"
  }, {
    "_id" : "R62",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R63",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R64",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R65",
    "_libelle" : "java.io.File.writeObject@POLYN636789.s"
  }, {
    "_id" : "R66",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R67",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN390526.s"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN322565.assignments"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN167218.reader"
  }, {
    "_id" : "R71",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN327620.tp"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN327620.position"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN327620.requestedResetStrategy"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN345061.tp"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R78",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1466029.f"
  }, {
    "_id" : "R79",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1561419.b"
  }, {
    "_id" : "R80",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R81",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN164600.b"
  }, {
    "_id" : "R82",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN164600.off"
  }, {
    "_id" : "R83",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN164600.len"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716.partitions"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716.offsetResetStrategy"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN191104.key"
  }, {
    "_id" : "R88",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1502637.r"
  }, {
    "_id" : "R89",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1502637.f"
  }, {
    "_id" : "R90",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1514314.r"
  }, {
    "_id" : "R91",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1514314.f"
  }, {
    "_id" : "R92",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1521968.f"
  }, {
    "_id" : "R93",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN327029.tp"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN327029.position"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN205817.reporters"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN330001.tp"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN330001.position"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN336911.tp"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN336911.highWatermark"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN337101.tp"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN337101.logStartOffset"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN337291.tp"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN337291.lastStableOffset"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN337731.tp"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN337731.preferredReadReplicaId"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN337731.timeMs"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN340280.partitions"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN340280.nextAllowResetTimeMs"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN344655.partitions"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN344655.nextRetryTimeMs"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN306707.reporter"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN164550.status"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN164171.status"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN165238.status"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN164695.status"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN177620.configs"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN169684.reader"
  }, {
    "_id" : "R124",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN163739.b"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN491166.namedTopology"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN240218.key"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN240218.value"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN240218.windowStartTimestamp"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN194757.newCacheSizeBytes"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN263447.key"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN263447.value"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN263447.windowStartTimestamp"
  }, {
    "_id" : "R137",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R138",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN174685.snk"
  }, {
    "_id" : "R139",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R140",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN223440.b"
  }, {
    "_id" : "R141",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN224547.b"
  }, {
    "_id" : "R142",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN224547.off"
  }, {
    "_id" : "R143",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN224547.len"
  }, {
    "_id" : "R144",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R145",
    "_libelle" : "java.io.PipedWriter.connect@POLYN173915.snk"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN318422.pattern"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN318422.listener"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN240598.builder"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN155242.topics"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN173093.connector"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN173093.configs"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN173853.aclMutator"
  }, {
    "_id" : "R158",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R159",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN180787.snapshot"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN163658.force"
  }, {
    "_id" : "R165",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R166",
    "_libelle" : "java.io.PipedReader.receive@POLYN205157.c"
  }, {
    "_id" : "R167",
    "_libelle" : "java.io.PipedReader.receive@POLYN205157.off"
  }, {
    "_id" : "R168",
    "_libelle" : "java.io.PipedReader.receive@POLYN205157.len"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN205188.errorHandlingMetrics"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN165665.topic"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN165665.nowMs"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN167706.lastVersion"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN167706.timeoutMs"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN168478.requestVersion"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN168478.response"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN168478.isPartialUpdate"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN168478.nowMs"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN169091.fatalException"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN149764.key"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN149764.value"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN306351.reporter"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN163615.entries"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN169437.newState"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN169437.now"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN227168.callback"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN227399.connName"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN227399.callback"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229832.connName"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229832.config"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229832.allowReplace"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229832.callback"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN232997.connName"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN232997.callback"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN171475.connector"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN171475.properties"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN172094.connector"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN172445.connector"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN173978.connector"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN173978.state"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN174803.listener"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN183502.partition"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN183502.offset"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN175360.acls"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN170975.newLeader"
  }, {
    "_id" : "R208",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R209",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN252459.readlimit"
  }, {
    "_id" : "R210",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R211",
    "_libelle" : "java.io.PipedReader.receive@POLYN203479.c"
  }, {
    "_id" : "R212",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R213",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN392579.exception"
  }, {
    "_id" : "R214",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN331129.fac"
  }, {
    "_id" : "R215",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN513142.fac"
  }, {
    "_id" : "R216",
    "_libelle" : "java.util.Hashtable.forEach@POLYN448892.action"
  }, {
    "_id" : "R217",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN449798.function"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN158647.committedOffsets"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN258058.activePartitionHostMap"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN258058.standbyPartitionHostMap"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN258058.clusterMetadata"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN203688.namespace"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN148402.position"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN151685.amount"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN170509", "S0:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN170509", "S0:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN171849", "S0:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN171849", "S0:org.apache.kafka.connect.runtime.Connect.stop@POLYN156590", "S0:org.apache.kafka.connect.runtime.Connect.stop@POLYN156590", "S0:org.apache.kafka.connect.runtime.ConnectMetrics.stop@POLYN226018", "S0:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S0:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257.dummymethode_00075" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN832362", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN832362", "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477 (R3 in line [00060],R12 in line [00060],R13 in line [00060],R14 in line [00060],R15 in line [00060])", "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477.dummymethode_00062" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN170509", "S2:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN170509", "S2:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN171849", "S2:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN171849", "S2:org.apache.kafka.connect.runtime.Connect.stop@POLYN156590", "S2:org.apache.kafka.connect.runtime.Connect.stop@POLYN156590", "S2:org.apache.kafka.connect.runtime.ConnectMetrics.stop@POLYN226018", "S2:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S2:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN168192", "S2:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN305569 (R2 in line [00558])", "S2:java.util.Map.remove@POLYN451797" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN170509", "S3:org.apache.kafka.connect.cli.ConnectDistributed.main@POLYN170509", "S3:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN171849", "S3:org.apache.kafka.connect.cli.ConnectDistributed.startConnect@POLYN171849", "S3:org.apache.kafka.connect.runtime.Connect.stop@POLYN156590", "S3:org.apache.kafka.connect.runtime.Connect.stop@POLYN156590", "S3:org.apache.kafka.connect.runtime.ConnectMetrics.stop@POLYN226018", "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257 (R3 in line [00072],R4 in line [00072],R5 in line [00072],R6 in line [00072])", "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN166257.dummymethode_00075" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:java.lang.Throwable.writeObject@POLYN390526 (R66 in line [01002],R67 in line [01002])", "S4:java.lang.Throwable.getOurStackTrace@POLYN384557 (R66 in line [00834])", "S4:java.lang.Throwable.getOurStackTrace@POLYN384557.dummymethode_00839" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:java.lang.Throwable.addSuppressed@POLYN392579 (R66 in line [01070],R213 in line [01070])", "S5:java.lang.Throwable.addSuppressed@POLYN392579.dummymethode_01074" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.StreamStateListener.onChange@POLYN524086 (R8 in line [00662])", "S6:org.apache.kafka.streams.KafkaStreams.setState@POLYN510357 (R10 in line [00322])", "S6:org.apache.kafka.streams.KafkaStreams.setState@POLYN510357.dummymethode_00323" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220", "S7:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220", "S7:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115 (R9 in line [01039],R10 in line [01051])", "S7:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704 (R11 in line [01215])", "S7:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704.dummymethode_01214" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220", "S8:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220", "S8:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115 (R9 in line [01039],R10 in line [01051])", "S8:org.apache.kafka.streams.KafkaStreams.start@POLYN555217 (R8 in line [01832])", "S8:org.apache.kafka.streams.KafkaStreams.start@POLYN555217.dummymethode_01832" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220", "S9:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220", "S9:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115 (R9 in line [01039],R10 in line [01051])", "S9:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115 (R9 in line [01039],R10 in line [01051])", "S9:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704 (R11 in line [01215])", "S9:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704.dummymethode_01214" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN832362", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN832362", "S10:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477 (R3 in line [00060],R12 in line [00060],R13 in line [00060],R14 in line [00060],R15 in line [00060])", "S10:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477 (R3 in line [00060],R12 in line [00060],R13 in line [00060],R14 in line [00060],R15 in line [00060])", "S10:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN165477.dummymethode_00062" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN226251 (R16 in line [00105])", "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN226251 (R16 in line [00105])", "S11:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN242875", "S11:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN467340", "S11:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN465127", "S11:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN464001", "S11:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN464001", "S11:org.apache.kafka.connect.runtime.Worker.stop@POLYN424631", "S11:org.apache.kafka.connect.runtime.Worker.stop@POLYN424631", "S11:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN498542 (R17 in line [01751])" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN226251 (R16 in line [00105])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN226251 (R16 in line [00105])", "S12:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN242875", "S12:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN467340", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTasks@POLYN466394", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN465351", "S12:org.apache.kafka.connect.runtime.Worker.awaitStopTask@POLYN465351", "S12:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN224676 (R18 in line [00292])", "S12:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN224676.dummymethode_00296" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623 (R16 in line [00242],R19 in line [00242])", "S13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623 (R16 in line [00242],R19 in line [00242])", "S13:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623.dummymethode_00245" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745 (R16 in line [00201],R25 in line [00201],R26 in line [00201],R27 in line [00201],R28 in line [00201],R29 in line [00201])", "S14:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN230745.dummymethode_00208" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN228764 (R16 in line [00161],R30 in line [00161],R31 in line [00161])", "S15:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN228764.dummymethode_00165" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN237074 (R16 in line [00309],R32 in line [00309],R33 in line [00309])", "S16:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN165890", "S16:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN165890.dummymethode_00055" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN234458 (R16 in line [00274],R34 in line [00274],R35 in line [00274])", "S17:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN234458.dummymethode_00276" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN235871 (R16 in line [00291],R50 in line [00291],R51 in line [00291])", "S18:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN235871.dummymethode_00293" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN227168 (R16 in line [00133],R188 in line [00133])", "S19:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN227399 (R16 in line [00138],R189 in line [00138],R190 in line [00138])", "S20:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN227399.dummymethode_00141" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229832 (R16 in line [00181],R191 in line [00181],R192 in line [00181],R193 in line [00181],R194 in line [00181])", "S21:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN229832.dummymethode_00186" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN232997 (R16 in line [00251],R195 in line [00251],R196 in line [00251])", "S22:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN232997.dummymethode_00253" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623 (R16 in line [00242],R19 in line [00242])", "S23:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623 (R16 in line [00242],R19 in line [00242])", "S23:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN243355", "S23:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN205156", "S23:org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN162608", "S23:org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN164208", "S23:org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN164208", "S23:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN224676 (R18 in line [00292])", "S23:org.apache.kafka.connect.runtime.WorkerConnector.cancel@POLYN224676.dummymethode_00296" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623 (R16 in line [00242],R19 in line [00242])", "S24:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN232623 (R16 in line [00242],R19 in line [00242])", "S24:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN243355", "S24:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN242875", "S24:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN467340", "S24:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN465127", "S24:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN464001", "S24:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN464001", "S24:org.apache.kafka.connect.runtime.Worker.stop@POLYN424631", "S24:org.apache.kafka.connect.runtime.Worker.stop@POLYN424631", "S24:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN498542 (R17 in line [01751])" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858221", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN860697", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN860697", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN862594", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN915230", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN342154 (R20 in line [00695])", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN340132", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339521 (R20 in line [00636],R21 in line [00636],R22 in line [00636])", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S25:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S25:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN906828", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN906828", "S26:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN336173 (R20 in line [00561],R43 in line [00561])", "S26:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S26:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S26:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN897671", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN897671", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN344358 (R20 in line [00737],R47 in line [00737])", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S27:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S27:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN898429", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN898429", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN344509 (R20 in line [00741],R48 in line [00741])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S28:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S28:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN159441", "S29:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN334606 (R20 in line [00529],R49 in line [00529])", "S29:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S29:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S29:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN322565 (R20 in line [00273],R68 in line [00273])", "S30:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN322565.dummymethode_00277" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN327620 (R20 in line [00390],R72 in line [00390],R73 in line [00390],R74 in line [00390])", "S31:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN326875", "S31:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S31:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN345061 (R20 in line [00755],R75 in line [00755])", "S32:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN174099", "S32:java.util.HashMap.HashIterator.remove@POLYN678242", "S32:java.util.HashMap.HashIterator.remove@POLYN678242.dummymethode_01445" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716 (R20 in line [00640],R85 in line [00640],R86 in line [00640])", "S33:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716.dummymethode_00641" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN327219", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN327029 (R20 in line [00378],R94 in line [00378],R95 in line [00378])", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S34:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S34:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN330001 (R20 in line [00443],R98 in line [00443],R99 in line [00443])", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S35:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S35:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN336911 (R20 in line [00576],R100 in line [00576],R101 in line [00576])", "S36:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S36:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S36:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN337101 (R20 in line [00580],R102 in line [00580],R103 in line [00580])", "S37:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S37:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S37:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN337291 (R20 in line [00584],R104 in line [00584],R105 in line [00584])", "S38:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S38:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S38:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN337731 (R20 in line [00596],R106 in line [00596],R107 in line [00596],R108 in line [00596])", "S39:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S39:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S39:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN340280 (R20 in line [00651],R109 in line [00651],R110 in line [00651])", "S40:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN326510", "S40:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S40:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN344655 (R20 in line [00745],R111 in line [00745],R112 in line [00745])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN326875", "S41:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S41:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN851570", "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN318422 (R20 in line [00172],R146 in line [00172],R147 in line [00172])", "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN323466", "S42:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN323466.dummymethode_00292" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN263000 (R36 in line [00001],R37 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN263295", "S43:org.apache.kafka.common.utils.Utils.delete@POLYN448751", "S43:org.apache.kafka.common.utils.Utils.delete@POLYN448751.dummymethode_00852" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN263000 (R36 in line [00001],R37 in line [00001])", "S44:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN263295", "S44:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN263295", "S44:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN259995 (R36 in line [00001],R38 in line [00001])", "S44:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN259995.dummymethode_00001" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN258790 (R36 in line [00001])", "S45:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN253850 (R52 in line [00001])", "S45:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN253850.dummymethode_00001" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN263000 (R36 in line [00001],R37 in line [00001])", "S46:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN263295", "S46:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN263295", "S46:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN259995 (R36 in line [00001],R38 in line [00001])", "S46:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN259995 (R36 in line [00001],R38 in line [00001])", "S46:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN259995.dummymethode_00001" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225424", "S47:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225722 (R39 in line [00104],R40 in line [00104])", "S47:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225722 (R39 in line [00104],R40 in line [00104])", "S47:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN228562", "S47:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN228562.dummymethode_00170" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225424", "S48:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225722 (R39 in line [00104],R40 in line [00104])", "S48:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN225722 (R39 in line [00104],R40 in line [00104])", "S48:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN228562", "S48:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN253830", "S48:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN257681", "S48:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN491577 (R41 in line [00412])", "S48:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN491577.dummymethode_00413" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.tools.ClientCompatibilityTest.main@POLYN233152", "S49:org.apache.kafka.tools.ClientCompatibilityTest.run@POLYN240082", "S49:org.apache.kafka.tools.ClientCompatibilityTest.testProduce@POLYN240369", "S49:java.io.BufferedOutputStream.flush@POLYN165635 (R80 in line [00139])", "S49:java.io.BufferedOutputStream.flushBuffer@POLYN163304", "S49:java.io.BufferedOutputStream.write@POLYN164600 (R80 in line [00116],R81 in line [00116],R82 in line [00116],R83 in line [00116])", "S49:java.io.BufferedOutputStream.write@POLYN164600 (R80 in line [00116],R81 in line [00116],R82 in line [00116],R83 in line [00116])", "S49:java.io.BufferedOutputStream.write@POLYN164600.dummymethode_00123" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:java.io.BufferedOutputStream.write@POLYN163739 (R80 in line [00093],R124 in line [00093])", "S50:java.io.BufferedOutputStream.flushBuffer@POLYN163304", "S50:java.io.BufferedOutputStream.write@POLYN164600 (R80 in line [00116],R81 in line [00116],R82 in line [00116],R83 in line [00116])", "S50:java.io.BufferedOutputStream.write@POLYN164600 (R80 in line [00116],R81 in line [00116],R82 in line [00116],R83 in line [00116])", "S50:java.io.BufferedOutputStream.write@POLYN164600.dummymethode_00123" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN192096 (R55 in line [00256])", "S51:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN189822", "S51:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN305569 (R2 in line [00558])", "S51:java.util.Map.remove@POLYN451797" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN191104 (R55 in line [00235],R87 in line [00235])", "S52:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN191104.dummymethode_00237" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.image.ConfigurationsImage.configProperties@POLYN155526", "S53:org.apache.kafka.image.ConfigurationsImage.configProperties@POLYN155526", "S53:org.apache.kafka.image.ConfigurationImage.toProperties@POLYN157069", "S53:java.util.Hashtable.putAll@POLYN433370 (R56 in line [00536],R57 in line [00536])", "S53:java.util.Hashtable.put@POLYN429896 (R56 in line [00471])", "S53:java.util.Hashtable.put@POLYN429896.dummymethode_00478" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:java.util.Hashtable.forEach@POLYN448892 (R56 in line [00888],R216 in line [00888])", "S54:java.util.Hashtable.forEach@POLYN448892.dummymethode_00889" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:java.util.Hashtable.replaceAll@POLYN449798 (R56 in line [00908],R217 in line [00908])", "S55:java.util.Hashtable.replaceAll@POLYN449798.dummymethode_00909" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:java.net.Socket.Socket@POLYN472367", "S56:java.net.Socket.close@POLYN507944 (R63 in line [00001],R64 in line [00001])", "S56:java.net.Socket.close@POLYN507944 (R63 in line [00001],R64 in line [00001])", "S56:java.net.Socket.close@POLYN507944.dummymethode_00001" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:java.net.Socket.setSocketImplFactory@POLYN513142 (R63 in line [00001],R215 in line [00001])", "S57:java.net.Socket.setSocketImplFactory@POLYN513142.dummymethode_00001" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN167218 (R69 in line [00076],R70 in line [00076])", "S58:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN167218.dummymethode_00078" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN169684 (R69 in line [00139],R123 in line [00139])", "S59:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN169684.dummymethode_00141" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN170975 (R69 in line [00169],R207 in line [00169])", "S60:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN170975 (R69 in line [00169],R207 in line [00169])", "S60:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN170975.dummymethode_00173" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN167218 (R69 in line [00076],R70 in line [00076])", "S61:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN167218 (R69 in line [00076],R70 in line [00076])", "S61:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN167218.dummymethode_00078" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN327620 (R20 in line [00390],R72 in line [00390],R73 in line [00390],R74 in line [00390])", "S62:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN327620 (R20 in line [00390],R72 in line [00390],R73 in line [00390],R74 in line [00390])", "S62:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN326875", "S62:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299", "S62:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN176299.dummymethode_00114" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716 (R20 in line [00640],R85 in line [00640],R86 in line [00640])", "S63:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716 (R20 in line [00640],R85 in line [00640],R86 in line [00640])", "S63:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716.dummymethode_00641" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716 (R20 in line [00640],R85 in line [00640],R86 in line [00640])", "S64:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN339716 (R20 in line [00640],R85 in line [00640],R86 in line [00640])", "S64:java.io.InputStream.reset@POLYN257314 (R23 in line [00350])" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN191104 (R55 in line [00235],R87 in line [00235])", "S65:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN191104 (R55 in line [00235],R87 in line [00235])", "S65:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN191104.dummymethode_00237" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN164550 (R115 in line [00071],R116 in line [00071])", "S66:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN164171 (R115 in line [00063],R117 in line [00063])", "S66:java.util.Map.remove@POLYN451797" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN165238 (R115 in line [00084],R118 in line [00084])", "S67:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN164695 (R115 in line [00076],R119 in line [00076])", "S67:org.apache.kafka.connect.util.Table.remove@POLYN152951", "S67:org.apache.kafka.connect.util.Table.remove@POLYN152951.dummymethode_00046" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN169684 (R69 in line [00139],R123 in line [00139])", "S68:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN169684 (R69 in line [00139],R123 in line [00139])", "S68:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN169684.dummymethode_00141" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN194757 (R131 in line [00075],R132 in line [00075])", "S69:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN194757.dummymethode_00077" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN203688 (R131 in line [00254],R225 in line [00254])", "S70:java.util.Hashtable.remove@POLYN480232" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN194757 (R131 in line [00075],R132 in line [00075])", "S71:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN194757 (R131 in line [00075],R132 in line [00075])", "S71:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN194757.dummymethode_00077" ]
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
    "_c1" : "R8",
    "_c2" : "R10",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.StreamStateListener.onChange@POLYN524086/line[00662]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "2",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.setState@POLYN510357/line[00322]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S6 org.apache.kafka.streams.KafkaStreams.setState@POLYN510357.dummymethode_00323"
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
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704/line[01215]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S7 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704.dummymethode_01214"
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
    "_c3" : "S8 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S8 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S8 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S8 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "2",
    "_c2" : "",
    "_c3" : "S8 org.apache.kafka.streams.KafkaStreams.start@POLYN555217/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S8 org.apache.kafka.streams.KafkaStreams.start@POLYN555217.dummymethode_01832"
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
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN517220"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN541115/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704/line[01215]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN550704.dummymethode_01214"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  } ]
}