console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "KTableProcessorSupplier<KIn,VIn,KIn,VIn>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KTablePassThrough"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KTablePassThrough" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#32"
 , "c1" : "KTablePassThrough"
 , "c2" : "KTablePassThrough(Collection&lt;KStreamAggProcessorSupplier&gt;;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#38"
 , "c1" : "Processor&lt;KIn,Change&lt;VIn&gt;,KIn,Change&lt;VIn&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#43"
 , "c1" : "boolean"
 , "c2" : "enableSendingOldValues(boolean)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#52"
 , "c1" : "KTableValueGetterSupplier&lt;KIn,VIn&gt;"
 , "c2" : "view()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.kstream.internals.KTablePassThrough.enableSendingOldValues@POLYN161044 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method init arguments ProcessorContext&lt;KIn ,Change&lt;VIn &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method process arguments Record&lt;KIn ,Change&lt;VIn &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method get arguments KIn  key"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTablePassThrough.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
