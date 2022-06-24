console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java 58 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ReadOnlySessionStore<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CompositeReadOnlySessionStore"
 , "c2" : "CompositeReadOnlySessionStore(StateStoreProvider;QueryableStoreType<ReadOnlySessionStore<K,V>>;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "findSessions(K;long;long)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardFindSessions(K;long;long)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "findSessions(K;K;long;long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardFindSessions(K;K;long;long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "fetchSession(K;long;long)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "fetch(K)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardFetch(K)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "fetch(K;K)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardFetch(K;K)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "13"
}}
,
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
 , "c4" : "35"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class CompositeReadOnlySessionStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method findSessions arguments K  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00035] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN189121 the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN189121 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN189121 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN189121 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN189121 the MagicNumber/String  'please re-discover its location from the state metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method backwardFindSessions arguments K  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN190417 the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN190417 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN190417 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN190417 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN190417 the MagicNumber/String  'please re-discover its location from the state metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method findSessions arguments K  keyFrom|K  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00096] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN191713 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN191713 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN191713 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.findSessions@POLYN191713 the MagicNumber/String  'please re-discover its location from the state metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method backwardFindSessions arguments K  keyFrom|K  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN192964 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN192964 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN192964 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFindSessions@POLYN192964 the MagicNumber/String  'please re-discover its location from the state metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method fetchSession arguments K  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00142] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetchSession@POLYN194157 the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetchSession@POLYN194157 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetchSession@POLYN194157 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetchSession@POLYN194157 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetchSession@POLYN194157 the MagicNumber/String  'please re-discover its location from the state metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetchSession@POLYN194157 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method fetch arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00160] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetch@POLYN195165 the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetch@POLYN195165 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetch@POLYN195165 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetch@POLYN195165 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetch@POLYN195165 the MagicNumber/String  'please re-discover its location from the state metadata. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.fetch@POLYN195165 the MagicNumber/String  'Original error message: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method backwardFetch arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00182] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00188] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFetch@POLYN196405 the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFetch@POLYN196405 the MagicNumber/String  'State store  [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFetch@POLYN196405 the MagicNumber/String  '] is not available anymore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFetch@POLYN196405 the MagicNumber/String  ' and may have been migrated to another instance; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.state.internals.CompositeReadOnlySessionStore.backwardFetch@POLYN196405 the MagicNumber/String  'please re-discover its location from the state metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method fetch arguments K  keyFrom|K  keyTo"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CompositeReadOnlySessionStore.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method backwardFetch arguments K  keyFrom|K  keyTo"
}} 
]
};
console.log('leListeStr 99 main end');
