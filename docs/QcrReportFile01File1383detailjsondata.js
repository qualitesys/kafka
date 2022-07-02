console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java 60 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SnapshottableHashTable<TimelineHashMap.TimelineHashMapEntry<K,V>>Map<K,V>"
 , "c2" : "org.apache.kafka.timeline.TimelineHashMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.TimelineHashMap" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimelineHashMap"
 , "c2" : "TimelineHashMap(SnapshotRegistry;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "size(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsKey(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsKey(Object;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsValue(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "get(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "get(Object;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "put(K;V)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "remove(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAll(Map<?extendsK,?extendsV>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<K>"
 , "c2" : "keySet()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<K>"
 , "c2" : "keySet(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<V>"
 , "c2" : "values()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<V>"
 , "c2" : "values(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<Entry<K,V>>"
 , "c2" : "entrySet()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<Entry<K,V>>"
 , "c2" : "entrySet(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "6"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "22"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class TimelineHashMapEntry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method setValue arguments V  value"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method setStartEpoch arguments long  startEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.timeline.TimelineHashMap.TimelineHashMapEntry.equals@POLYN209192 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method size arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method isEmpty arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.timeline.TimelineHashMap.isEmpty@POLYN210319 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method containsKey arguments Object  key"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method containsKey arguments Object  key|long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.timeline.TimelineHashMap.containsKey@POLYN210665 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.timeline.TimelineHashMap.containsKey@POLYN210665 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method containsValue arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.timeline.TimelineHashMap.containsValue@POLYN210961 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.timeline.TimelineHashMap.containsValue@POLYN210961 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method get arguments Object  key"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method get arguments Object  key|long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.timeline.TimelineHashMap.get@POLYN211729 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.timeline.TimelineHashMap.get@POLYN211729 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.timeline.TimelineHashMap.get@POLYN211729 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method put arguments K  key|V  value"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.timeline.TimelineHashMap.put@POLYN212224 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.timeline.TimelineHashMap.put@POLYN212224 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method remove arguments Object  key"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.timeline.TimelineHashMap.remove@POLYN212929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.timeline.TimelineHashMap.remove@POLYN212929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.timeline.TimelineHashMap.remove@POLYN212929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method putAll arguments Map&lt;?  extends K ,?  extends V &gt;  map"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument map is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.timeline.TimelineHashMap.KeySet.clear@POLYN214180 the MagicNumber/String  'can't modify snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method contains arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method remove arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.timeline.TimelineHashMap.KeySet.remove@POLYN214785 the MagicNumber/String  'can't modify snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.timeline.TimelineHashMap.KeySet.remove@POLYN214785 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00195] The class KeyIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method keySet arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.timeline.TimelineHashMap.Values.clear@POLYN216599 the MagicNumber/String  'can't modify snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00250] For method contains arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00255] The class ValueIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method values arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.timeline.TimelineHashMap.EntrySet.clear@POLYN218722 the MagicNumber/String  'can't modify snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method contains arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.timeline.TimelineHashMap.EntrySet.contains@POLYN219188 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#314"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00314] For method remove arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.timeline.TimelineHashMap.EntrySet.remove@POLYN219378 the MagicNumber/String  'can't modify snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.timeline.TimelineHashMap.EntrySet.remove@POLYN219378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.timeline.TimelineHashMap.EntrySet.remove@POLYN219378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00322] The class EntryIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#350"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00350] For method entrySet arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.timeline.TimelineHashMap.hashCode@POLYN220946 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#365"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00365] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00376] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.timeline.TimelineHashMap.equals@POLYN221414 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.timeline.TimelineHashMap.equals@POLYN221414 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.timeline.TimelineHashMap.equals@POLYN221414 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.timeline.TimelineHashMap.equals@POLYN221414 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.timeline.TimelineHashMap.equals@POLYN221414 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashMap.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.timeline.TimelineHashMap.equals@POLYN221414 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
