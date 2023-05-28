console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java 31 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KTableProcessorSupplier<KIn,VIn,KIn,VIn>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KTableFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KTableFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#35"
 , "c1" : "KTableFilter"
 , "c2" : "KTableFilter(KTableImpl&lt;KIn,?,VIn&gt;;Predicate&lt;?superKIn,?superVIn&gt;;boolean;String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#48"
 , "c1" : "Processor&lt;KIn,Change&lt;VIn&gt;,KIn,Change&lt;VIn&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#53"
 , "c1" : "boolean"
 , "c2" : "enableSendingOldValues(boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#65"
 , "c1" : "VIn"
 , "c2" : "computeValue(KIn;VIn)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#75"
 , "c1" : "ValueAndTimestamp&lt;VIn&gt;"
 , "c2" : "computeValue(KIn;ValueAndTimestamp&lt;VIn&gt;)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#139"
 , "c1" : "KTableValueGetterSupplier&lt;KIn,VIn&gt;"
 , "c2" : "view()"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument parent is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilter@POLYN173921 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.kstream.internals.KTableFilter.enableSendingOldValues@POLYN174780 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.kstream.internals.KTableFilter.enableSendingOldValues@POLYN174780 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.kstream.internals.KTableFilter.enableSendingOldValues@POLYN174780 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.internals.KTableFilter.enableSendingOldValues@POLYN174780 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method computeValue arguments KIn  key|VIn  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.kstream.internals.KTableFilter.computeValue@POLYN175205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.kstream.internals.KTableFilter.computeValue@POLYN175205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method computeValue arguments KIn  key|ValueAndTimestamp&lt;VIn &gt;  valueAndTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method computeValue list of called methods Object monObjet|V valueAndTimestamp_valueN175990"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.KTableFilter.computeValue@POLYN175681 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.kstream.internals.KTableFilter.computeValue@POLYN175681 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method init arguments ProcessorContext&lt;KIn ,Change&lt;VIn &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilterProcessor.init@POLYN176683 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method process arguments Record&lt;KIn ,Change&lt;VIn &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00108] For method process list of called methods Object monObjet|K record_keyN177431|V record_valueN177534|VIn computeOldValueN177739"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilterProcessor.process@POLYN177270 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilterProcessor.process@POLYN177270 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilterProcessor.process@POLYN177270 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method computeOldValue arguments KIn  key|Change&lt;VIn &gt;  change"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument change is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilterProcessor.computeOldValue@POLYN178612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.kstream.internals.KTableFilter.KTableFilterProcessor.computeOldValue@POLYN178612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00139] For method view list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.KTableValueGetterSupplier parent_valueGetterSupplierN179502"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.kstream.internals.KTableFilter.view@POLYN179121 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method get arguments KIn  key"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableFilter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
