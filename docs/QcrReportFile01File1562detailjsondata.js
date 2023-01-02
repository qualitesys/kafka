console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java 30 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#71"
 , "c1" : "RemoteLogMetadataSnapshotFile"
 , "c2" : "RemoteLogMetadataSnapshotFile(Path)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#92"
 , "c1" : "void"
 , "c2" : "write(Snapshot)"
 , "c3" : "2"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#143"
 , "c1" : "Optional<Snapshot>"
 , "c2" : "read()"
 , "c3" : "6"
 , "c4" : "22"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument metadataStoreDir is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.RemoteLogMetadataSnapshotFile@POLYN175946 the MagicNumber/String  'Remote log metadata snapshot file: [{}], newFileCreated: [{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#92"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00092] Lock statement on synchronized method write"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method write arguments Snapshot  snapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN176837 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN176837 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN176837 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#143"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00143] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00165] Assigning instead of comparing on lenBufferReadCt=channel.read(lenBuffer) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00179] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00188] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  'Invalid amount of data read for the length of an entry, file may have been corrupted.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  'Invalid amount of data read, file may have been corrupted.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  'Unexpected entries in the snapshot file. Expected size: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN178906 the MagicNumber/String  ', but found: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.Snapshot@POLYN182159 the MagicNumber/String  'Unexpected version received: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.equals@POLYN183130 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.equals@POLYN183130 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN183961 the MagicNumber/String  'Snapshot{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN183961 the MagicNumber/String  'version=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN183961 the MagicNumber/String  ', metadataPartition=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN183961 the MagicNumber/String  ', metadataPartitionOffset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN183961 the MagicNumber/String  ', remoteLogSegmentMetadataSnapshotsSize' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN183961 the MagicNumber/String  '}' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
