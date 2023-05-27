console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java 30 rule violations " 
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
 , "c5" : "00069"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#69"
 , "c1" : "RemoteLogMetadataSnapshotFile"
 , "c2" : "RemoteLogMetadataSnapshotFile(Path)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#90"
 , "c1" : "void"
 , "c2" : "write(Snapshot)"
 , "c3" : "2"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#141"
 , "c1" : "Optional&lt;Snapshot&gt;"
 , "c2" : "read()"
 , "c3" : "6"
 , "c4" : "22"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c1" : "00069"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument metadataStoreDir is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.RemoteLogMetadataSnapshotFile@POLYN184936 the MagicNumber/String  'Remote log metadata snapshot file: [{}], newFileCreated: [{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#90"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00090] Lock statement on synchronized method write"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method write arguments Snapshot  snapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN185829 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN185829 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN185829 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#141"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00141] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00163] Assigning instead of comparing on lenBufferReadCt=channel.read(lenBuffer) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  'Invalid amount of data read for the length of an entry, file may have been corrupted.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  'Invalid amount of data read, file may have been corrupted.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  'Unexpected entries in the snapshot file. Expected size: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.read@POLYN187908 the MagicNumber/String  ', but found: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.Snapshot@POLYN191185 the MagicNumber/String  'Unexpected version received: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.equals@POLYN192156 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.equals@POLYN192156 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN192989 the MagicNumber/String  'Snapshot{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN192989 the MagicNumber/String  'version=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN192989 the MagicNumber/String  ', metadataPartition=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN192989 the MagicNumber/String  ', metadataPartitionOffset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN192989 the MagicNumber/String  ', remoteLogSegmentMetadataSnapshotsSize' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.Snapshot.toString@POLYN192989 the MagicNumber/String  '}' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/RemoteLogMetadataSnapshotFile.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
