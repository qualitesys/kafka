console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java 39 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SnapshottableHashTable<TimelineHashSet.TimelineHashSetEntry<T>>Set<T>"
 , "c2" : "org.apache.kafka.timeline.TimelineHashSet"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.TimelineHashSet" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimelineHashSet"
 , "c2" : "TimelineHashSet(SnapshotRegistry;int)"
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
 , "c2" : "contains(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "contains(Object;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<T>"
 , "c2" : "iterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<T>"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object[]"
 , "c2" : "toArray()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "add(T)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "remove(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsAll(Collection<?>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "addAll(Collection<?extendsT>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "retainAll(Collection<?>)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "removeAll(Collection<?>)"
 , "c3" : "3"
 , "c4" : "6"
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
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "4"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class TimelineHashSetEntry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method setStartEpoch arguments long  startEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.timeline.TimelineHashSet.TimelineHashSetEntry.equals@POLYN187575 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method size arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method isEmpty arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.timeline.TimelineHashSet.isEmpty@POLYN188670 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method contains arguments Object  key"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method contains arguments Object  object|long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.timeline.TimelineHashSet.contains@POLYN189016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00083] The class ValueIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.timeline.TimelineHashSet.toArray@POLYN190287 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.timeline.TimelineHashSet the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.timeline.TimelineHashSet the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method add arguments T  newValue"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method remove arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.timeline.TimelineHashSet.remove@POLYN192041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method containsAll arguments Collection&lt;? &gt;  collection"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.timeline.TimelineHashSet.containsAll@POLYN192266 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.timeline.TimelineHashSet.containsAll@POLYN192266 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method addAll arguments Collection&lt;?  extends T &gt;  collection"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.timeline.TimelineHashSet.addAll@POLYN192591 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.timeline.TimelineHashSet.addAll@POLYN192591 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method retainAll arguments Collection&lt;? &gt;  collection"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument collection is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.timeline.TimelineHashSet.retainAll@POLYN193013 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.timeline.TimelineHashSet.retainAll@POLYN193013 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method removeAll arguments Collection&lt;? &gt;  collection"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument collection is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.timeline.TimelineHashSet.removeAll@POLYN193666 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.timeline.TimelineHashSet.removeAll@POLYN193666 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.timeline.TimelineHashSet.hashCode@POLYN194403 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.timeline.TimelineHashSet.equals@POLYN194814 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.timeline.TimelineHashSet.equals@POLYN194814 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.timeline.TimelineHashSet.equals@POLYN194814 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineHashSet.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.timeline.TimelineHashSet.equals@POLYN194814 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
