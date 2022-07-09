console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/Stores.java 63 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.Stores"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.Stores" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KeyValueBytesStoreSupplier"
 , "c2" : "persistentKeyValueStore(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueBytesStoreSupplier"
 , "c2" : "persistentTimestampedKeyValueStore(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueBytesStoreSupplier"
 , "c2" : "inMemoryKeyValueStore(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueBytesStoreSupplier"
 , "c2" : "lruMap(String;int)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "WindowBytesStoreSupplier"
 , "c2" : "persistentWindowStore(String;Duration;Duration;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WindowBytesStoreSupplier"
 , "c2" : "persistentTimestampedWindowStore(String;Duration;Duration;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WindowBytesStoreSupplier"
 , "c2" : "persistentWindowStore(String;Duration;Duration;boolean;boolean)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "WindowBytesStoreSupplier"
 , "c2" : "persistentWindowStore(String;long;long;boolean;long;boolean)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "WindowBytesStoreSupplier"
 , "c2" : "inMemoryWindowStore(String;Duration;Duration;boolean)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "SessionBytesStoreSupplier"
 , "c2" : "persistentSessionStore(String;Duration)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "SessionBytesStoreSupplier"
 , "c2" : "inMemorySessionStore(String;Duration)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.svg" }

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
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "51"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00027] The class Stores contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method persistentKeyValueStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.state.Stores.persistentKeyValueStore@POLYN243328 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.state.Stores.persistentKeyValueStore@POLYN243328 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method persistentTimestampedKeyValueStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.state.Stores.persistentTimestampedKeyValueStore@POLYN243990 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.state.Stores.persistentTimestampedKeyValueStore@POLYN243990 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method inMemoryKeyValueStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.state.Stores.inMemoryKeyValueStore@POLYN244583 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method lruMap arguments String  name|int  maxCacheSize"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.state.Stores.lruMap@POLYN245239 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.state.Stores.lruMap@POLYN245239 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.state.Stores.lruMap@POLYN245239 the MagicNumber/String  'maxCacheSize cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.state.Stores.lruMap@POLYN245239 the MagicNumber/String  'in-memory-lru' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method persistentWindowStore arguments String  name|Duration  retentionPeriod|Duration  windowSize|boolean  retainDuplicates"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN246867 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method persistentTimestampedWindowStore arguments String  name|Duration  retentionPeriod|Duration  windowSize|boolean  retainDuplicates"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.state.Stores.persistentTimestampedWindowStore@POLYN248012 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method persistentWindowStore arguments String  name|Duration  retentionPeriod|Duration  windowSize|boolean  retainDuplicates|boolean  timestampedStore"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN248345 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN248345 the MagicNumber/String  'retentionPeriod' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN248345 the MagicNumber/String  'windowSize' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN248345 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN248345 the MagicNumber/String  60_000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method persistentWindowStore arguments String  name|long  retentionPeriod|long  windowSize|boolean  retainDuplicates|long  segmentInterval|boolean  timestampedStore"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  'retentionPeriod cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  'windowSize cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  'segmentInterval cannot be zero or negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  'The retention period of the window store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  ' must be no smaller than its window size. Got size=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  '], retention=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.state.Stores.persistentWindowStore@POLYN249412 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method inMemoryWindowStore arguments String  name|Duration  retentionPeriod|Duration  windowSize|boolean  retainDuplicates"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  'retentionPeriod' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  'retentionPeriod cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  'windowSize' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  'windowSize cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  'The retention period of the window store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  ' must be no smaller than its window size. Got size=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  '], retention=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.state.Stores.inMemoryWindowStore@POLYN251380 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method persistentSessionStore arguments String  name|Duration  retentionPeriod"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.state.Stores.persistentSessionStore@POLYN253129 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.state.Stores.persistentSessionStore@POLYN253129 the MagicNumber/String  'retentionPeriod' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.state.Stores.persistentSessionStore@POLYN253129 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.Stores.persistentSessionStore@POLYN253129 the MagicNumber/String  'retentionPeriod cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method inMemorySessionStore arguments String  name|Duration  retentionPeriod"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.streams.state.Stores.inMemorySessionStore@POLYN254110 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.state.Stores.inMemorySessionStore@POLYN254110 the MagicNumber/String  'retentionPeriod' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.state.Stores.inMemorySessionStore@POLYN254110 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.state.Stores.inMemorySessionStore@POLYN254110 the MagicNumber/String  'retentionPeriod cannot be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.state.Stores the MagicNumber/String  'supplier cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.state.Stores the MagicNumber/String  'supplier cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.streams.state.Stores the MagicNumber/String  'supplier cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.state.Stores the MagicNumber/String  'supplier cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/Stores.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.state.Stores the MagicNumber/String  'supplier cannot be null' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
