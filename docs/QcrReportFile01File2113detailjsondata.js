console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java 96 rule violations " 
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
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#55"
 , "c1" : "RocksDBTimestampedStore"
 , "c2" : "RocksDBTimestampedStore(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#60"
 , "c1" : "RocksDBTimestampedStore"
 , "c2" : "RocksDBTimestampedStore(String;String;RocksDBMetricsRecorder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#67"
 , "c1" : "void"
 , "c2" : "openRocksDB(DBOptions;ColumnFamilyOptions)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#92"
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
 , "c4" : "10"
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
 , "c4" : "4"
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
 , "c4" : "2"
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
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method openRocksDB arguments DBOptions  dbOptions|ColumnFamilyOptions  columnFamilyOptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  'keyValueWithTimestamp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  'Column family not found: keyValueWithTimestamp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  'Error opening store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  ' at location ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  'Error opening store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.openRocksDB@POLYN209299 the MagicNumber/String  ' at location ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method setDbAccessor arguments ColumnFamilyHandle  noTimestampColumnFamily|ColumnFamilyHandle  withTimestampColumnFamily"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument noTimestampColumnFamily is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN211479 the MagicNumber/String  'Opening store {} in upgrade mode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.setDbAccessor@POLYN211479 the MagicNumber/String  'Opening store {} in regular mode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method put arguments byte[]  key|byte[]  valueWithTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String  'Error while putting key/value into store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method prepareBatch arguments List&lt;KeyValue&lt;Bytes ,byte[] &gt; &gt;  entries|WriteBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.prepareBatch@POLYN214226 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method get arguments byte[]  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00161] For method get list of called methods Object monObjet|byte[] convertToTimestampedFormatN215358"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method getOnly arguments byte[]  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.getOnly@POLYN215598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.getOnly@POLYN215598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.getOnly@POLYN215598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method range arguments Bytes  from|Bytes  to|boolean  forward"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.range@POLYN216289 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method deleteRange arguments byte[]  from|byte[]  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN216712 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN216712 the MagicNumber/String  'Error while removing key from store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method all arguments boolean  forward"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method prefixScan arguments Bytes  prefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00240] For method prefixScan list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes Bytes_incrementN218387"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.prefixScan@POLYN218282 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.prefixScan@POLYN218282 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.approximateNumEntries@POLYN218758 the MagicNumber/String  'rocksdb.estimate-num-keys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.approximateNumEntries@POLYN218758 the MagicNumber/String  'rocksdb.estimate-num-keys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#266"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00266] For method prepareBatchForRestore arguments Collection&lt;KeyValue&lt;byte[] ,byte[] &gt; &gt;  records|WriteBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method addToBatch arguments byte[]  key|byte[]  value|WriteBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#276"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00276] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.addToBatch@POLYN219705 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#323"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00323] Lock statement on synchronized method hasNext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.hasNext@POLYN221626 the MagicNumber/String  'RocksDB iterator for store %s has closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#331"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00331] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.makeNext@POLYN222148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#394"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00394] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFIterator.close@POLYN225469 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#420"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00420] The argument iterWithTimestamp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#421"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00421] The argument iterNoTimestamp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN226258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN226258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN226258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN226258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN226258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.RocksDBDualCFRangeIterator@POLYN226258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN227933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN227933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN227933 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00463"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN227933 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.RocksDBDualCFRangeIterator.makeNext@POLYN227933 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN216712"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.flush@POLYN219010"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.get@POLYN214793 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String 'Error while removing key from store ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String 'Error while removing key from store ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String 'Error while removing key from store ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.put@POLYN212684 the MagicNumber/String 'Error while putting key/value into store ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN216712 the MagicNumber/String 'Error while removing key from store ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.html#221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00221] In the recursive method org.apache.kafka.streams.state.internals.RocksDBTimestampedStore.DualColumnFamilyAccessor.deleteRange@POLYN216712 the MagicNumber/String 'Error while removing key from store ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimestampedStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
