console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java 85 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RocksDBStoreTimestampedBytesStore"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimestampedStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimestampedStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "RocksDBTimestampedStore"
 , "c2" : "RocksDBTimestampedStore(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RocksDBTimestampedStore"
 , "c2" : "RocksDBTimestampedStore(String;String;RocksDBMetricsRecorder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "openRocksDB(DBOptions;ColumnFamilyOptions)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "setDbAccessor(ColumnFamilyHandle;ColumnFamilyHandle)"
 , "c3" : "3"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "61"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method openRocksDB arguments DBOptions  dbOptions|ColumnFamilyOptions  columnFamilyOptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  'keyValueWithTimestamp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  'Column family not found: keyValueWithTimestamp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  'Error opening store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  ' at location ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  'Error opening store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN207917 the MagicNumber/String  ' at location ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method setDbAccessor arguments ColumnFamilyHandle  noTimestampColumnFamily|ColumnFamilyHandle  withTimestampColumnFamily"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument noTimestampColumnFamily is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN210097 the MagicNumber/String  'Opening store {} in upgrade mode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN210097 the MagicNumber/String  'Opening store {} in regular mode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00091] The class DualColumnFamilyAccessor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method put arguments byte[]  key|byte[]  valueWithTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN211302 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN211302 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN211302 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN211302 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN211302 the MagicNumber/String  'Error while putting key/value into store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method prepareBatch arguments List&lt;KeyValue&lt;Bytes ,byte[] &gt; &gt;  entries|WriteBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.prepareBatch@POLYN212844 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method get arguments byte[]  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00144] For method get list of called methods Object monObjet|byte[] convertToTimestampedFormatN213976"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN213411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN213411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN213411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method getOnly arguments byte[]  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.getOnly@POLYN214216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.getOnly@POLYN214216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.getOnly@POLYN214216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method range arguments Bytes  from|Bytes  to|boolean  forward"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.range@POLYN214907 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00193] For method deleteRange arguments byte[]  from|byte[]  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN215330 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN215330 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method all arguments boolean  forward"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#223"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00223] For method prefixScan arguments Bytes  prefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.prefixScan@POLYN216900 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.prefixScan@POLYN216900 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.approximateNumEntries@POLYN217376 the MagicNumber/String  'rocksdb.estimate-num-keys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.approximateNumEntries@POLYN217376 the MagicNumber/String  'rocksdb.estimate-num-keys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method prepareBatchForRestore arguments Collection&lt;KeyValue&lt;byte[] ,byte[] &gt; &gt;  records|WriteBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00257] For method addToBatch arguments byte[]  key|byte[]  value|WriteBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#259"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00259] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.addToBatch@POLYN218323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#306"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00306] Lock statement on synchronized method hasNext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.hasNext@POLYN220244 the MagicNumber/String  'RocksDB iterator for store %s has closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#314"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00314] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN220766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#377"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00377] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.close@POLYN224087 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#403"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00403] The argument iterWithTimestamp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#404"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00404] The argument iterNoTimestamp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN224876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN224876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN224876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN224876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00429"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN224876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00429"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN224876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN226551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN226551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN226551 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN226551 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN226551 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN210097"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN210097 the MagicNumber/String 'Opening store {} in upgrade mode' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN210097 the MagicNumber/String 'Opening store {} in regular mode' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
