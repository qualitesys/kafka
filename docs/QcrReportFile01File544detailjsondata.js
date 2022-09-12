console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.quota.ClientQuotaFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.quota.ClientQuotaFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#16"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "ClientQuotaFilter(Collection<ClientQuotaFilterComponent>;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#22"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "contains(Collection<ClientQuotaFilterComponent>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#27"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "containsOnly(Collection<ClientQuotaFilterComponent>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#32"
 , "c1" : "ClientQuotaFilter"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#37"
 , "c1" : "Collection<ClientQuotaFilterComponent>"
 , "c2" : "components()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#42"
 , "c1" : "boolean"
 , "c2" : "strict()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#47"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#55"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#60"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
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
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ClientQuotaFilter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method contains arguments Collection&lt;ClientQuotaFilterComponent &gt;  components"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.common.quota.ClientQuotaFilter.contains@POLYN152230 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method containsOnly arguments Collection&lt;ClientQuotaFilterComponent &gt;  components"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.quota.ClientQuotaFilter.containsOnly@POLYN152590 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.quota.ClientQuotaFilter.all@POLYN152842 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00049] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.quota.ClientQuotaFilter.equals@POLYN153343 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.quota.ClientQuotaFilter.equals@POLYN153343 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.quota.ClientQuotaFilter.equals@POLYN153343 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.quota.ClientQuotaFilter.toString@POLYN154118 the MagicNumber/String  'ClientQuotaFilter(components=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.quota.ClientQuotaFilter.toString@POLYN154118 the MagicNumber/String  ', strict=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.quota.ClientQuotaFilter.toString@POLYN154118 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/quota/ClientQuotaFilter.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00032] Public method all is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
